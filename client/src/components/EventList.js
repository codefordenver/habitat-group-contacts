import React, { Component } from "react";
import EventCard from "../containers/Event";
import { connect } from "react-redux";
import { fetchEvents } from "../actions/fetchEvents";
import { fetchUserGroups } from "../actions/fetchUserGroups";
import { bindActionCreators } from "redux";
import _ from "lodash";
import LinearProgress from "@material-ui/core/LinearProgress";
import AppBar from "../containers/AppBar";

class EventList extends Component {
  componentWillMount() {
    this.props.fetchEvents();
    var i = 0;
    for (i = 0; i < 30; i++) {
      this.props.fetchUserGroups(i);
    }
  }

  render() {
    return (
      <React.Fragment>
        <AppBar title="Habitat for Humainty - Denver" />

        {this.props.events ? (
          _.map(this.props.events, event => (
            <EventCard
              key={event.EventUid}
              event={event}
              userGroups={this.props.userGroups}
            />
          ))
        ) : (
          <LinearProgress />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    userGroups: state.userGroups
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, fetchUserGroups }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
