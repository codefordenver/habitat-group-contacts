const axios = require("axios");
const keys = require("../config/keys");

module.exports = app => {
  //GET EVENTS FROM MONGO URL_STUB
  app.get("/api/db/event", (req, res) => {
    const url_stub = req.query.url_stub;

    console.log("Get Request Event for : " + url_stub);

    axios
      .get(url, {
        auth: {
          username: keys.volunteerHubUsername,
          password: keys.volunteerHubPassword
        }
      })
      .then(request => res.send(request.data), error => console.log(error));
  });
};