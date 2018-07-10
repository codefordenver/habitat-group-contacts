import React from 'react';
import Typography from '@material-ui/core/Typography';
import dateFormat from './dateFormat';
import Divider from '@material-ui/core/Divider';

const UserGroupDetails = props => {
  const eventTime =
    dateFormat(props.startTime, 'start') +
    ' - ' +
    dateFormat(props.endTime, 'end');

  return (
    <React.Fragment>
      <Typography variant="headline">Event: {props.eventName}</Typography>

      <Typography variant="subheading">{eventTime}</Typography>

      <div style={{ margin: '10px' }} />

      <Typography variant="headline">
        User List For: {props.userGroupName}
      </Typography>

      <div style={{ margin: '10px' }} />

      <Divider />

      <div style={{ margin: '10px' }} />
    </React.Fragment>
  );
};

export default UserGroupDetails;
