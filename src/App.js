import React, { Component } from "react";
import EventList from "./components/EventList";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <EventList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
