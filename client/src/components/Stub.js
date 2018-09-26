import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStub } from "../actions/fetchEvents";
import { bindActionCreators } from "redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserDetail from "../containers/UserDetail";

class URL_STUB extends Component {
  componentWillMount() {
    const EventUid = this.props.EventUid;
    const userGroupUid = this.props.userGroupUid;
    this.props.fetchStub(EventUid, userGroupUid);
  }

  render() {
    const { stub } = this.props;
    
    return (
      <div>
        {stub ? stub.url_stub : ""}
      </div>
    );
  }
}

function mapStateToProps({ stub }, ownProps) {
  return { stub: stub[ownProps.EventUid + "/" + ownProps.userGroupUid] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStub }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(URL_STUB);
