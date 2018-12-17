import React, { Component } from "react";
import EventCard from "../containers/EventCard";
import { connect } from "react-redux";
import {
  fetchEvents,
  fetchUserGroups,
  clearUserGroupData
} from "../actions/fetchEvents";
import {
  eventDataSelector,
  eventErrorSelector,
  eventFetchingSelector
} from "../reducers/reducerEvents";
import { clearUsers } from "../actions/fetchUser";
import { bindActionCreators } from "redux";
import _ from "lodash";
import LoadingIndicator from "../containers/LoadingIndicator";

class EventList extends Component {
  componentWillMount() {
    this.props.clearUsers();
    this.props.clearUserGroupData();

    var i = 0;
    for (i = 0; i < 60; i++) {
      this.props.fetchUserGroups(i);
    }
  }

  renderEvents(events) {
    return _.map(events, event => (
      <EventCard
        key={event.EventUid}
        event={event}
        userGroups={this.props.userGroups}
      />
    ));
  }

  renderLoadingIndicator() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <LoadingIndicator color="primary" />
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.eventsFetching && this.renderLoadingIndicator()}
        {this.props.events && this.renderEvents(this.props.events)}
        {this.props.eventsError && (
          <div>
            An error was encountered
            {this.props.eventsError}
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: eventDataSelector(state.events),
    eventsFetching: eventFetchingSelector(state.events),
    eventsError: eventErrorSelector(state.events),
    userGroups: state.userGroups
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchEvents, fetchUserGroups, clearUsers, clearUserGroupData },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
