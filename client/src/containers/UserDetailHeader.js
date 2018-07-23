import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const headingStyle = {
  marginBottom: "10px"
};

const UserDetail = () => {
  return (
    <React.Fragment>
      <Typography variant="subheading" style={headingStyle}>
        <Grid container>
          <Grid item xs={10} sm={3}>
            Name
          </Grid>
          <Grid item xs={12} sm={3}>
            Number
          </Grid>
          <Grid item xs={12} sm={3}>
            Email
          </Grid>
        </Grid>
      </Typography>
    </React.Fragment>
  );
};

export default UserDetail;
