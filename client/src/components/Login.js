import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div>
      <h3>Login Place Holder Page</h3>
      <Button
        variant="contained"
        size="small"
        color="primary"
        component={Link}
        to="/events"
      >
        Go to Events Page
      </Button>
    </div>
  );
};

export default Login;
