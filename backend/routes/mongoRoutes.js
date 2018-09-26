const axios = require("axios");
const keys = require("../config/keys");
const stub = require("../services/stubs.js");

module.exports = app => {
  //GET EVENTS FROM MONGO URL_STUB
  app.get("/api/db/event", async (req, res) => {
    const url_stub = req.query.url_stub;

    const event = await stub.lookupStub(url_stub);

    console.log("Get Request Event for : " + event);
    res.send(event);
  });

  app.get("/api/db/stub", async (req, res) => {
    const eventUID = req.query.eventUID;
    const usergroupUID = req.query.usergroupUID;
    const usergroupStub = await stub.getStub(eventUID, usergroupUID);
    //console.log("Get Request Stub for : " + usergroupStub);
  
    res.send(JSON.stringify(usergroupStub));
  });
};
