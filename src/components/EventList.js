import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../actions/fetchEvents";
import { bindActionCreators } from "redux";

class EventList extends Component {
  render() {
    return (
      <div>
        {console.log(fetchEvents())}
        This is the EventList component
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(EventList);
