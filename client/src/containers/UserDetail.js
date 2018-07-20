import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import userDataExtract from './userData';

const UserDetail = props => {
  const { user } = props;

  const userObject = userDataExtract(user);

  return (
    <Grid container>
      <Grid item xs={10} sm={3}>
        <Typography>
          {userObject.FirstName} {userObject.LastName}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{userObject.Phone} </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{userObject.Email} </Typography>
      </Grid>
    </Grid>
  );
};

export default UserDetail;
