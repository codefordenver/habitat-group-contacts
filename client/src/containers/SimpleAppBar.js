import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

class SimpleAppBar extends React.Component {

  renderContent() {
      switch (this.props.auth) {
        case null:
          return;

        case false:
          return (
            <React.Fragment>
              <Button color="inherit" component={Link} to="/auth/google">Login With Google</Button>
            </React.Fragment>
          );

        default:
          return (
            <React.Fragment>
              <Button color="inherit" component={Link} to="/auth/logout">Logout</Button>
            </React.Fragment>
          );
      }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.title}
            </Typography>
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
