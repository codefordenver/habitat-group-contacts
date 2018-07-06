import React from "react";
import Typography from "@material-ui/core/Typography";

const UserGroupDetails = props => {
  return (
    <React.Fragment>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px" }}
        variant="headline"
      >
        {props.name}
      </Typography>
    </React.Fragment>
  );
};

export default UserGroupDetails;
