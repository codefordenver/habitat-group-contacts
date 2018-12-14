import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  div: {
    margin: "10px"
  },
  error: {
    textColor:"red"
  }
};

class AdminNavigation extends React.Component {
  renderUserSettings() {
    const { classes } = this.props;

    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <React.Fragment>
            <Button
              className={classes.div}
              variant="contained"
              color="secondary"
              href="/api/auth/google"
            >
              Login With Google
            </Button>
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            <div className={classes.div}>
              <Typography variant="title">
                You are logged in as: {this.props.auth.googleEmail}
              </Typography>
            </div>

            <div className={classes.div}>
              {this.props.auth.isAdmin ? (
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="/#/admin-events"
                  >
                    Events Search Page
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography color="error">
                    Your account is not setup to search events.  Request access from your administrator.
                  </Typography>
                </div>
              )}
            </div>

            <div className={classes.div}>
              <Button
                variant="contained"
                color="inherit"
                href="/api/auth/logout"
              >
                Logout
              </Button>
            </div>
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderUserSettings()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(AdminNavigation);
