import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SimpleAppBar from "../containers/SimpleAppBar";

class Login extends React.Component {

  render() {
    const style = {
      divStyle: {
        padding: "5px",
        margin: "10px 0 10px 0"
      }
    };

    return (
      < div >
        < SimpleAppBar title = "Habitat for Humanity - Denver" auth={this.props.auth} />
        < div style = {style.divStyle}>
          < Grid container alignItems = "center" >
            < Grid item xs = {12} sm = {3} >
              < Button variant = "contained" size = "small" color = "primary" component = {Link} to = "/events">
                Go to Events Page after Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Login);
