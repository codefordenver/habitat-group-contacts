const axios = require("axios");
const keys = require("../../config/keys");
const stub = require("../../services/stubs.js");
const _ = require("lodash");
const router = require("express").Router();
const {
  processUser,
  requestOptions
} = require("../../services/processRequests.js");

router.route("/stub").get(async (req, res) => {
  const eventUID = req.query.eventUID;
  const usergroupUID = req.query.usergroupUID;
  const usergroupStub = await stub.getStub(eventUID, usergroupUID);
  //console.log("Get Request Stub for : " + usergroupStub);

  res.send(JSON.stringify(usergroupStub));
});

//GET USERGROUP DATA BY MONGO LOOKUP
router.route("/usergroup").get(async (req, res) => {
  const url_stub = req.query.url_stub;
  console.log("Requested Stub");

  const getStubData = async url_stub => {
    try {
      const savedStubData = await stub.lookupStub(url_stub);
      return savedStubData;
    } catch (error) {
      return null;
    }
  };

  const stub_data = await getStubData(url_stub);

  if (stub_data) {
    const { event_uid } = stub_data;
    const { usergroup_uid } = stub_data;

    const url = "https://denver.volunteerhub.com/api/v1/events/" + event_uid;

    const event_response = await axios.get(url, {
      auth: {
        username: keys.volunteerHubUsername,
        password: keys.volunteerHubPassword
      }
    });

    const event_data = await event_response.data;

    const userGroup = _.mapKeys(
      event_data.UserGroupRegistrations,
      "UserGroupUid"
    )[usergroup_uid];

    //Return Only Required Event Data
    const returned_event = {
      Name: event_data.Name,
      EndTime: event_data.EndTime,
      StartTime: event_data.StartTime,
      Registrations: userGroup.UserRegistrations
    };

    res.send(returned_event);
  } else {
    res.send(null);
  }
});

//GET USERS BY ID FROM VOLUNTEER HUB
router.route("/user").get((req, res) => {
  const id = req.query.id;
  url = "https://denver.volunteerhub.com/api/v2/users/" + id;

  axios.get(url, requestOptions).then(
    request => {
      try {
        res.send(processUser(request.data));
      } catch (error) {
        console.log("Error URL : " + url);
        console.log(request.data);
        console.log(error);
      }
    },
    error => {
      console.log("Error URL : " + url);
      console.log(error);
    }
  );
});

module.exports = router;
