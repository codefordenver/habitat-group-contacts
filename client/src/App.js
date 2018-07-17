import React, { Component } from 'react';
import EventList from './components/EventList';
import UserGroup from './components/UserGroup';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentWillMount() {
    document.body.style.margin = 0;
  }

  //Jetbrains test.

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: '#fbfbfb',
          minHeight: '100vh'
        }}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Router>
              <div>
                <Route exact path="/" component={EventList} />
                <Route path="/:event/:usergroupid" component={UserGroup} />
              </div>
            </Router>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
