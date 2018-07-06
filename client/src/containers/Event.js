import React from "react";
import _ from "lodash";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import moment from "moment";

const divStyle = {
  padding: "5px",
  margin: "5px"
};

const buttonStyle = {
  marginLeft: "15px"
};

const checkUserGroup = (event, group, userGroup) => {
  const userGroupUid = group.UserGroupUid;
  const userGroupDetail = userGroup[userGroupUid];

  if (userGroupDetail) {
    return (
      <div key={userGroupUid} style={divStyle}>
        {/* Why is UserGroupUid for first group exist without name or users? */}
        <Typography>
          {userGroupDetail.Name}

          <Button
            variant="contained"
            size="small"
            color="primary"
            component={Link}
            style={buttonStyle}
            to={event.EventUid + "/" + userGroupUid}
          >
            View Users
          </Button>
        </Typography>
      </div>
    );
  }

  return null;
};

const dateFormat = (date, type) => {
  var d = new Date(date);

  switch (type) {
    case "start":
      return moment(d).format("MMMM Do YYYY, h:mm:ss a");

    case "end":
      return moment(d).format("h:mm:ss a");

    default:
      return null;
  }
};

const loadEvent = (event, userGroup) => {
  return (
    <div>
      <Paper style={divStyle}>
        <Typography variant="title">{event.Name}</Typography>

        <Typography variant="subheading">
          {dateFormat(event.StartTime, "start")} {" - "}
          {dateFormat(event.EndTime, "end")}
        </Typography>

        <Typography variant="caption">
          {/* Removing <p> tags https://stackoverflow.com/questions/822452/strip-html-from-text-javascript */}
          {event.LongDescription.replace(/<(?:.|\n)*?>/gm, "")}
        </Typography>

        <div style={divStyle} />

        {_.map(event.UserGroupRegistrations, group =>
          checkUserGroup(event, group, userGroup)
        )}
      </Paper>
    </div>
  );
};

const Event = props => {
  return (
    <React.Fragment>
      {props.event ? loadEvent(props.event, props.userGroups) : null}
    </React.Fragment>
  );
};

export default Event;
