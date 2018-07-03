import React from "react";
import Grid from "@material-ui/core/Grid";

const UserDetail = props => {
  const { user } = props;

  const FIRST_NAME_UID = "01a07da8-05cc-45af-8e59-f8742cb7fa8e";
  const LAST_NAME_UID = "01a07da8-05cc-45af-8e59-f8742cb7fa8e";
  const PHONE_UID = "39969c13-32f0-4398-946a-50faa497c520";
  const EMAIL_UID = "5573ba82-5374-4401-8d70-0c55492817e7";

  const FirstName = user[FIRST_NAME_UID].FirstName;
  const LastName = user[LAST_NAME_UID].LastName;
  const Phone = user[PHONE_UID].Value;
  const Email = user[EMAIL_UID].Value;

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
