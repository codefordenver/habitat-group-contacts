import React, { Component } from "react";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import UserGroup from "./components/UserGroup";
import NoMatch from "./containers/NoMatch";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  componentWillMount() {
    document.body.style.margin = 0;
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#fbfbfb",
          minHeight: "100vh"
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Router forceRefresh={true}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/events" component={HomePage} />
                <Route path="/:event/:usergroupid" component={UserGroup} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
