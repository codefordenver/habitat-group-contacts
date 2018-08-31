const axios = require("axios");
const keys = require("../config/keys");

module.exports = app => {
  //GET EVENTS LIST FROM VOLUNTEER HUB
  app.get("/volunteer/events", (req, res) => {
    const startDate = req.query.startDate;
    const latestTime = req.query.latestTime;
    url =
      "https://denver.volunteerhub.com/api/v1/events?query=Time&earliestTime=" +
      startDate +
      latestTime;

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

  //GET EVENTS BY ID FROM VOLUNTEER HUB
  app.get("/volunteer/eventsID", (req, res) => {
    const eventID = req.query.eventID;
    url = "https://denver.volunteerhub.com/api/v1/events/" + eventID;

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

  //GET USERS BY ID FROM VOLUNTEER HUB
  app.get("/volunteer/user", (req, res) => {
    const id = req.query.id;
    url = "https://denver.volunteerhub.com/api/v2/users/" + id;

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

  //GET USERGROUPS BY PAGE FROM VOLUNTEER HUB
  app.get("/volunteer/usergroups", (req, res) => {
    const page = req.query.page;
    url =
      "https://denver.volunteerhub.com/api/v1/usergroups?page=" +
      page +
      "&pageSize=50";

    console.log("Get Request : " + url);

    axios
      .get(url, {
        auth: {
          username: keys.volunteerHubUsername,
          password: keys.volunteerHubPassword
        }
      })
      .then(
        request => res.send(request.data),
        error => {
          console.log(
            "Error Code: " +
              error.response.status +
              " " +
              error.response.statusText +
              " - " +
              url
          );
        }
      );
  });
};
