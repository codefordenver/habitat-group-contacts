const stub = require("../services/stubs.js");

module.exports = async (req, res, next) => {
  const eventUID = req.query.eventUID;
  const usergroupUID = req.query.usergroupUID;
  const usergroupStub = await stub.getStub(eventUID, usergroupUID);

  if (!usergroupStub) {
    return res.status(401).send({ error: "You must log in!" });
  }

  //console.log("Login by Stub");
  next();
};
