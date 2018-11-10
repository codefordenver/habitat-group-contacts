const axios = require("axios");
const keys = require("../../config/keys");
const stub = require("../../services/stubs.js");
const { processUser } = require("../../services/processRequests.js");
const router = require("express").Router();

const requestOptions = {
  auth: {
    username: keys.volunteerHubUsername,
    password: keys.volunteerHubPassword
  }
};

//GET EVENTS LIST FROM VOLUNTEER HUB
router.route("/events").get((req, res) => {
  const startDate = req.query.startDate;
  const latestTime = req.query.latestTime;
  url =
    "https://denver.volunteerhub.com/api/v1/events?query=Time&earliestTime=" +
    startDate +
    latestTime;

  axios.get(url, requestOptions).then(
    request => {
      var { data } = request;
      data.map(event => {
        const eventUID = event.EventUid;

        event.UserGroupRegistrations.map(async usergroup => {
          const groupUID = usergroup.UserGroupUid;

          const userGroupStub = await stub.getStub(eventUID, groupUID);
          //console.log(userGroupStub.url_stub);
        });
      });
      res.send(data);
    },
    error => console.log(error)
  );
});

//GET EVENTS BY ID FROM VOLUNTEER HUB
router.route("/eventsID").get((req, res) => {
  const eventID = req.query.eventID;
  url = "https://denver.volunteerhub.com/api/v1/events/" + eventID;

  axios
    .get(url, requestOptions)
    .then(request => res.send(request.data), error => console.log(error));
});

//GET USERS BY ID FROM VOLUNTEER HUB
router.route("/user").get((req, res) => {
  const id = req.query.id;
  url = "https://denver.volunteerhub.com/api/v2/users/" + id;

  axios.get(url, requestOptions).then(
    request => {
      res.send(processUser(request.data));
    },
    error => console.log(error)
  );
});

//GET USERGROUPS BY PAGE FROM VOLUNTEER HUB
router.route("/usergroups").get((req, res) => {
  const page = req.query.page;
  url =
    "https://denver.volunteerhub.com/api/v1/usergroups?page=" +
    page +
    "&pageSize=50";

  //console.log("Get Request : " + url);

  axios.get(url, requestOptions).then(
    request => res.send(request.data),
    error => {
      console.log(error);
    }
  );
});

module.exports = router;
