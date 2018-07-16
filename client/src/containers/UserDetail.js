import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import userDataExtract from "./userData";

const UserDetail = props => {
  const { user } = props;
  const { deleted } = props;

  const userObject = userDataExtract(user);

  const attending = deleted => {
    switch (deleted) {
      case true:
        return <CloseIcon />;

      case false:
        return <CheckIcon />;

      default:
        return null;
    }
  };

  return (
    <Grid container>
      <Grid item xs={2} sm={2}>
        {attending(deleted)}
      </Grid>
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
