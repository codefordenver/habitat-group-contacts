import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import EventPage from "./components/EventPage";
import UserGroupPage from "./components/UserGroupPage";
import NoMatch from "./containers/NoMatch";
import * as actions from "./actions/index";

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
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/admin-events" component={EventPage} />
                  <Route exact path="/admin-login" component={AdminPage} />
                  <Route
                    path="/event/:url_stub"
                    component={UserGroupPage}
                  />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </div>
            </Router>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
