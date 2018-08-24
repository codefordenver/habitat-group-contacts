import React from "react";
import Grid from "@material-ui/core/Grid";
import Cross from "@material-ui/icons/Close";
import VolunteerHubLogo from "../img/volunteer-hub.svg";
import HabitatForHumanity from "../img/habitat-for-humanity-logo.jpg";

class HomePage extends React.Component {
  render() {
    const style = {
      img: {
        width: "200px"
      }
    };
    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>Code for Denver Integration</h1>
          </Grid>
          <Grid item>
            <img style={style.img} src={HabitatForHumanity} />
          </Grid>
          <Grid item>
            <Cross style={{ fontSize: 44, margin: "10px" }} />
          </Grid>
          <Grid item>
            <img style={style.img} src={VolunteerHubLogo} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
