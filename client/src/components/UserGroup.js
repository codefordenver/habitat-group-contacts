import React, { Component } from "react";
import _ from "lodash";
import User from "./User";
import { connect } from "react-redux";
import { fetchEvents } from "../actions/fetchEvents";
import { fetchUserGroups } from "../actions/fetchUserGroups";
import { bindActionCreators } from "redux";
import UserDetailHeader from "../containers/UserDetailHeader";
import UserGroupDetails from "../containers/UserGroupDetails";

class UserGroup extends Component {
  componentWillMount() {
    this.props.fetchEvents();
    this.props.fetchUserGroups();
  }

  render() {
    const { event } = this.props;
    const { userGroups } = this.props;
    const { usergroupid } = this.props.match.params;

    const paddingStyle = {
      padding: "0 24px 0 24px"
    };

    const eventName = event ? event.Name : null;
    const eventStart = event ? event.StartTime : null;
    const eventEnd = event ? event.EndTime : null;

    const userGroup = event
      ? _.mapKeys(event.UserGroupRegistrations, "UserGroupUid")[usergroupid]
      : null;

    const userGroupName = userGroups[usergroupid]
      ? userGroups[usergroupid].Name
      : null;

    const loadUsers = userGroup => {
      return (
        <div>
          {userGroup
            ? _.map(userGroup.UserRegistrations, registeredUser => (
                <div key={registeredUser.UserUid}>
                  <User
                    lookupUser={registeredUser}
                    deleted={registeredUser.Deleted}
                  />
                </div>
              ))
            : ""}
        </div>
      );
    };

    return (
      <div>
        <UserGroupDetails
          eventName={eventName}
          userGroupName={userGroupName}
          startTime={eventStart}
          endTime={eventEnd}
        />
        <div style={paddingStyle}>
          <UserDetailHeader />
          {loadUsers(userGroup)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    event: state.events[ownProps.match.params.event],
    userGroups: state.userGroups
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, fetchUserGroups }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroup);
