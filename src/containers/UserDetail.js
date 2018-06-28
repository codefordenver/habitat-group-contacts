import React from 'react';
import Grid from '@material-ui/core/Grid';

const UserDetail = props => {
  const { user } = props;

  const FirstName = user[4].FirstName;
  const LastName = user[4].LastName;
  const Phone = user[5].Value;
  const Email = user[6].Value;

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        {FirstName} {LastName}
      </Grid>
      <Grid item xs={12} md={4}>
        {Phone}
      </Grid>
      <Grid item xs={12} md={4}>
        {Email}
      </Grid>
    </Grid>
  );
};

export default UserDetail;
