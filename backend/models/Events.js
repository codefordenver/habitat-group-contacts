const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventsSchema = new Schema({
  event_uid: String,
  usergroup_uid: String,
  url_stub: String,
});

mongoose.model("events", eventsSchema);