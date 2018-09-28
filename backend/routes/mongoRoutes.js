const axios = require("axios");
const keys = require("../config/keys");
const stub = require("../services/stubs.js");

module.exports = app => {
  //GET EVENTS FROM MONGO URL_STUB
  app.get("/api/db/event", async (req, res) => {
    const url_stub = req.query.url_stub;
    const mongo_event = await stub.lookupStub(url_stub);
    const event_uid = mongo_event.event_uid;

    const url = "https://denver.volunteerhub.com/api/v1/events/" + event_uid;

    console.log("Get Request : " + url);

    axios
      .get(url, {
        auth: {
          username: keys.volunteerHubUsername,
          password: keys.volunteerHubPassword
        }
      })
      .then(request => res.send(request.data), error => console.log(error));
  });

  //GET USERGROUP DATA BY MONGO LOOKUP
  app.get("/api/db/usergroup", async (req, res) => {
    const url_stub = req.query.url_stub;
    const mongo_usergroup_uid = await stub.lookupStub(url_stub).usergroup_uid;

    //const usergroup_uid_data = await UserGroups.findOne({ usergroup_uid: usergroup_uid });

    res.send(usergroup_uid_data);
  });

  app.get("/api/db/usergroup_id", async (req, res) => {
    const url_stub = req.query.url_stub;
    const mongo_event = await stub.lookupStub(url_stub);
    const usergroup_uid = mongo_event.usergroup_uid;

    res.send(usergroup_uid);
  });

  app.get("/api/db/stub", async (req, res) => {
    const eventUID = req.query.eventUID;
    const usergroupUID = req.query.usergroupUID;
    const usergroupStub = await stub.getStub(eventUID, usergroupUID);
    //console.log("Get Request Stub for : " + usergroupStub);

    res.send(JSON.stringify(usergroupStub));
  });
};
