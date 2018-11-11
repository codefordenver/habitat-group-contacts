import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const UserDetail = props => {
  const { user } = props;

  return (
    <Grid container>
      <Grid item xs={10} sm={3}>
        <Typography>
          {user.FirstName} {user.LastName}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{user.Phone} </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{user.Email} </Typography>
      </Grid>
    </Grid>
  );
};

export default UserDetail;
