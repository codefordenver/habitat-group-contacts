import React from 'react';
import _ from 'lodash';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const paperStyle = {
  padding: '10px',
  margin: '10px'
};

const buttonStyle = {
  margin: '10px'
};

const checkUserGroup = (event, UserGroupUid, userGroup) => {
  const userGroupDetail = userGroup[UserGroupUid];

  if (userGroupDetail) {
    return (
      <div key={UserGroupUid}>
        {/* Why is UserGroupUid for first group exist without name or users? */}
        <Paper style={paperStyle}>
          {userGroupDetail ? userGroupDetail.Name : ''}

          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            component={Link}
            to={event.EventUid + '/' + UserGroupUid}
          >
            View Users
          </Button>
        </Paper>
      </div>
    );
  }

  return null;
};

const loadEvent = (event, userGroup) => {
  return (
    <div>
      <Paper style={paperStyle}>
        <h1> Event Name: {event.Name} </h1>
        <h2> Event Description: {event.LongDescription} </h2>
        <h3> User Groups: </h3>

        {_.map(event.UserGroupRegistrations, group =>
          checkUserGroup(event, group.UserGroupUid, userGroup)
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
