const mongoose = require("mongoose");
const keys = require("../config/keys");
const generator = require("generate-password");

const Events = mongoose.model("events");

const getStub = async (event_uid, usergroup_uid) => {
  const existingEvent = await Events.findOne({
    event_uid: event_uid,
    usergroup_uid: usergroup_uid
  });

  if (existingEvent) {
    //Record Already Exists
    //console.log("Stub exists for " + event_uid + " / " + usergroup_uid)
    return existingEvent;
  }

  //!!NOTE -- SHOULD CHECK IF URL_STUB ALREADY EXISTS.
  var url_stub = generator.generate({
    length: 20,
    numbers: true
  });

  //Create new event
  const event = await new Events({
    event_uid: event_uid,
    usergroup_uid: usergroup_uid,
    url_stub: url_stub
  }).save();
  //console.log("NEW STUB: " + url_stub +  " for - " + event_uid + " / " + usergroup_uid)
  return event;
};

const lookupStub = async url_stub => {
  //Finds existing event object based on the url_stub
  const event = await Events.findOne({ url_stub: url_stub });
  return event;
};

module.exports = {getStub, lookupStub};
