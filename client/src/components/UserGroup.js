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

    const findUserGroup = (event, usergroupid) => {
      return event
        ? _.mapKeys(event.UserGroupRegistrations, "UserGroupUid")[usergroupid]
        : null;
    };

    const getUserGroupName = (userGroups, usergroupid) => {
      return userGroups[usergroupid] ? userGroups[usergroupid].Name : null;
    };

    const userGroup = findUserGroup(event, usergroupid);
    const userGroupName = getUserGroupName(userGroups, usergroupid);

    const loadUsers = userGroup => {
      return (
        <div>
          {userGroup
            ? _.map(userGroup.UserRegistrations, user => (
                <div key={user.UserUid}>
                  <User lookupUser={user} deleted={user.Deleted} />
                </div>
              ))
            : ""}
        </div>
      );
    };

    return (
      <div>
        <UserGroupDetails name={userGroupName} />
        <UserDetailHeader />
        {loadUsers(userGroup)}
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
