import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const UserDetail = () => {
  return (
    <Hidden smDown>
      <Grid container>
        <Grid item xs={12} md={4}>
          Name
        </Grid>
        <Grid item xs={12} md={4}>
          Number
        </Grid>
        <Grid item xs={12} md={4}>
          Email
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default UserDetail;
