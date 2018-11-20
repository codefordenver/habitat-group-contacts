import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  button: {
    margin: "10px"
  }
};

class AdminNavigation extends React.Component {
  renderContent() {
    //console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <React.Fragment>
            <Button variant="contained" color="contain" href="/api/auth/google">
              Login With Google
            </Button>
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            <Button variant="contained" color="inherit" href="/api/auth/logout">
              Logout
            </Button>
          </React.Fragment>
        );
    }
  }

  renderLinks() {
    //console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return;

      default:
        return (
          <React.Fragment>
            <Button variant="contained" color="secondary" href="/admin-events">
              Events Search Page
            </Button>
          </React.Fragment>
        );
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.button}> {this.renderLinks()}</div>
        <div className={classes.button}> {this.renderContent()}</div>
      </div>
    );
  }
}

export default withStyles(styles)(AdminNavigation);
