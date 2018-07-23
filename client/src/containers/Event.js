import React from "react";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { dateFormat } from "../utils/index";

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
  const userGroupUid = group.UserGroupUid;
  const userGroupDetail = userGroup[userGroupUid];

  if (userGroupUid) {
    return (
      <div key={userGroupUid} style={style.divStyle}>
        {/* Why is UserGroupUid for first group exist without name or users? */}
        <Grid container spacing={16}>
          <Grid item xs={12} sm={3}>
            <Typography variant="subheading">
              {userGroupDetail ? userGroupDetail.Name : <CircularProgress />}{" "}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography>{userGroupUid}</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                component={Link}
                style={style.buttonStyle}
                to={event.EventUid + "/" + userGroupUid}
              >
                View Users
              </Button>
            </Typography>
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
        <Typography variant="title">{event.Name}</Typography>

        <Typography variant="subheading">
          {dateFormat(event.StartTime, "start")} {" - "}
          {dateFormat(event.EndTime, "end")}
        </Typography>

        {/* Commented out the description as it is likely not required for admins */}

        {/* <Typography variant="caption"> */}
        {/* Removing <p> tags https://stackoverflow.com/questions/822452/strip-html-from-text-javascript */}
        {/* {event.LongDescription.replace(/<(?:.|\n)*?>/gm, "")}
        </Typography> }*/}

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
