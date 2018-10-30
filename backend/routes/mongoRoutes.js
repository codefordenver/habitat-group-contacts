const axios = require("axios");
const keys = require("../config/keys");
const stub = require("../services/stubs.js");
const _ = require("lodash");

module.exports = app => {
  app.get("/api/db/stub", async (req, res) => {
    const eventUID = req.query.eventUID;
    const usergroupUID = req.query.usergroupUID;
    const usergroupStub = await stub.getStub(eventUID, usergroupUID);
    //console.log("Get Request Stub for : " + usergroupStub);

    res.send(JSON.stringify(usergroupStub));
  });
  
  //GET USERGROUP DATA BY MONGO LOOKUP
  app.get("/api/db/usergroup", async (req, res) => {
    const url_stub = req.query.url_stub;
    const stub_data = await stub.lookupStub(url_stub);
    const {event_uid} = stub_data;
    const {usergroup_uid} = stub_data;

    const url = "https://denver.volunteerhub.com/api/v1/events/" + event_uid;

    const event_response = await axios
      .get(url, {
        auth: {
          username: keys.volunteerHubUsername,
          password: keys.volunteerHubPassword
        }
      });

    const event_data = await event_response.data;

    const userGroup = _.mapKeys(event_data.UserGroupRegistrations, "UserGroupUid")[usergroup_uid];

    //Return Only Required Event Data
    const returned_event = {
      Name : event_data.Name,
      EndTime: event_data.EndTime,
      StartTime: event_data.StartTime,
      Registrations: userGroup.UserRegistrations
    }

    res.send(returned_event);
  });
};
