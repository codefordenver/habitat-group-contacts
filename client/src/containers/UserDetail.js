import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const UserDetail = props => {
  const { user } = props;
  const { deleted } = props;

  const FIRST_NAME_UID = '01a07da8-05cc-45af-8e59-f8742cb7fa8e';
  const LAST_NAME_UID = '01a07da8-05cc-45af-8e59-f8742cb7fa8e';
  const PHONE_UID = '39969c13-32f0-4398-946a-50faa497c520';
  const EMAIL_UID = '5573ba82-5374-4401-8d70-0c55492817e7';

  const FirstName = user[FIRST_NAME_UID].FirstName;
  const LastName = user[LAST_NAME_UID].LastName;
  const Phone = user[PHONE_UID].Value;
  const Email = user[EMAIL_UID].Value;

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
          {FirstName} {LastName}{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{Phone} </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>{Email} </Typography>
      </Grid>
    </Grid>
  );
};

export default UserDetail;
