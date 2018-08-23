import React, { Component } from "react";
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import UserGroup from "./components/UserGroup";
import NoMatch from "./containers/NoMatch";
import * as actions from './actions/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchGoogleUser();
  }

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
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/events" component={HomePage} />
                <Route path="/events/:event/:usergroupid" component={UserGroup} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(null, actions)(App);
