import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import dateFormat from "./dateFormat";
import AppBar from "./AppBar";

const UserGroupDetails = props => {
  const eventTime =
    dateFormat(props.startTime, "start") +
    " - " +
    dateFormat(props.endTime, "end");

  const paddingStyle = {
    padding: "0 24px 0 24px"
  };

  return (
    <React.Fragment>
      <AppBar title={"User Group: " + props.userGroupName} />

      <div style={{ margin: "10px" }} />

      <div style={paddingStyle}>
        <Typography variant="headline">Event: {props.eventName}</Typography>

        <Typography variant="subheading">{eventTime}</Typography>

        <div style={{ margin: "10px" }} />

        <Divider />

        <div style={{ margin: "10px" }} />
      </div>
    </React.Fragment>
  );
};

export default UserGroupDetails;
