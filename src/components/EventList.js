import React, { Component } from 'react';
import EventCard from '../containers/Event';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/fetchEvents';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class EventList extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    console.log('Current props: ', this.props.events);
    return (
      <div>
        {this.props.events
          ? _.map(this.props.events, event => (
              <EventCard key={event.EventUid} event={event} />
            ))
          : 'Waiting for Events'}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.events };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
