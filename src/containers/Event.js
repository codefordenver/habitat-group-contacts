import React from "react";
import _ from "lodash";
import UserData from "../components/UserData";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const loadUser = group => {
  return (
    <div>
      <h4> Users </h4>
      {_.map(group.UserRegistrations, user => (
        <div key={user.UserUid}>
          <div> User ID - {user.UserUid} </div>
          <div> User Registration Date - {user.RegistrationDate} </div>
          <div>
            User Delete? (Is this if they are still registered) -
            {user.Deleted ? " True" : " False"}
          </div>
          <UserData userID={user.UserUid} />
        </div>
      ))}
    </div>
  );
};

const loadEvent = (event, userGroup) => {
  const paperStyle = {
    padding: "10px",
    margin: "10px"
  };

  const buttonStyle = {
    margin: "10px"
  };

  return (
    <div>
      <Paper style={paperStyle}>
        <h1> Event Name: {event.Name} </h1>
        <h2> Event Description: {event.LongDescription} </h2>

        {_.map(event.UserGroupRegistrations, group => (
          <div key={group.UserGroupUid}>
            {/* Why is UserGroupUid for first group exist without name or users? */}
            <Paper style={paperStyle}>
              <h3> UserGroupRegistrations </h3>
              <div />
              {userGroup[group.UserGroupUid]
                ? userGroup[group.UserGroupUid].Name
                : ""}
              <div />
              {group.UserGroupUid}

              {loadUser(group)}

              <Button variant="contained" color="primary" style={buttonStyle}>
                View Users
              </Button>
            </Paper>
          </div>
        ))}
      </Paper>
    </div>
  );
};

const Event = props => {
  return (
    <React.Fragment>
      {props.event ? loadEvent(props.event, props.userGroups) : ""}
    </React.Fragment>
  );
};

export default Event;
