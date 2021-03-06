import React from "react";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { dateFormat } from "../utils/index";
import Stub from "../components/Stub";

const style = {
  divStyle: {
    padding: "5px",
    margin: "10px 0 10px 0"
  },
  buttonStyle: {
    marginLeft: "15px"
  }
};

const checkUserGroup = (event, group, userGroup) => {
  const {UserGroupUid} = group;

  const userGroupDetail = userGroup[UserGroupUid];
  const countAllUsers = group.UserRegistrations.length;
  
  let countNonDeletedUsers;

  if (countAllUsers > 0 ){
    const userCountReducer = (accumulator, currentValue) => {
      if (!currentValue.Deleted){
        return accumulator += 1;
      }
      return accumulator;
    }

    countNonDeletedUsers = group.UserRegistrations.reduce(userCountReducer, 0);
  } else {

    countNonDeletedUsers = 0
  }

  // Add the following to hide groups with 0 reserved slots "&& group.SlotsReserved > 0"
  if (UserGroupUid && !group.Deleted) {
    return (
      <div key={UserGroupUid} style={style.divStyle}>
        {/* Why is UserGroupUid for first group exist without name or users? */}
        <Grid container spacing={16}>
          <Grid item xs={12} sm={3}>
            <Typography variant="subheading">
              {userGroupDetail ? userGroupDetail.Name : <CircularProgress />}{" "}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography>{UserGroupUid}</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography>Users: {countNonDeletedUsers}</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Stub EventUid={event.EventUid} UserGroupUid={UserGroupUid} />
          </Grid>
        </Grid>
      </div>
    );
  }

  return null;
};

const loadEvent = (event, userGroup) => {
  return (
    <div>
      <Paper style={style.divStyle}>
        <Typography variant="title">
          {event.Name} [{event.EventUid}]{" "}
        </Typography>

        <Typography variant="subheading">
          {dateFormat(event.StartTime, "start")} {" - "}
          {dateFormat(event.EndTime, "end")}
        </Typography>

        <div style={style.divStyle} />

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
