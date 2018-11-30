import React, { Component } from "react";
import EventCard from "../containers/EventCard";
import { connect } from "react-redux";
import { fetchEvents, fetchUserGroups, clearUserGroupData } from "../actions/fetchEvents";
import { clearUsers } from "../actions/fetchUser";
import { bindActionCreators } from "redux";
import _ from "lodash";
import LinearProgress from "@material-ui/core/LinearProgress";

class EventList extends Component {
  componentWillMount() {
    this.props.clearUsers();
    this.props.clearUserGroupData();
    
    var i = 0;
    for (i = 0; i < 60; i++) {
      this.props.fetchUserGroups(i);
    }
  }

  render() {
    return (
      <React.Fragment>
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
  return bindActionCreators({ fetchEvents, fetchUserGroups, clearUsers, clearUserGroupData }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
