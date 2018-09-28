import React, { Component } from "react";
import _ from "lodash";
import User from "./User";
import { connect } from "react-redux";
import {
  fetchEventByStub,
  fetchUserGroupIdByStub,
  fetchUserGroups
} from "../actions/fetchEvents";
import { clearUsers } from "../actions/fetchUser";
import { bindActionCreators } from "redux";
import UserDetailHeader from "../containers/UserDetailHeader";
import UserGroupDetails from "../containers/UserGroupDetails";
import DownloadExcel from "./DownloadExcel";

class UserGroup extends Component {
  componentWillMount() {
    this.props.fetchEventByStub(this.props.match.params.url_stub);
    this.props.fetchUserGroupIdByStub(this.props.match.params.url_stub);

    // Clear the user list when changing user groups as the download excel is pulling from the Redux Store
    this.props.clearUsers();
    var i = 0;
    for (i = 0; i < 30; i++) {
      this.props.fetchUserGroups(i);
    }
  }

  render() {
    const { event } = this.props;
    const { userGroups } = this.props;
    const { usergroupid } = this.props;

    const paddingStyle = {
      padding: "0 24px 0 24px"
    };

    const eventName = event ? event.Name : null;
    const eventStart = event ? event.StartTime : null;
    const eventEnd = event ? event.EndTime : null;

    const userGroup = event
      ? _.mapKeys(event.UserGroupRegistrations, "UserGroupUid")[usergroupid]
      : null;

    const userGroupName = userGroups ? userGroups.Name : null;

    const loadUsers = group => {
      return (
        <div>
          {group
            ? _.map(
                group.UserRegistrations,
                registeredUser =>
                  !registeredUser.Deleted ? (
                    <div key={registeredUser.UserUid}>
                      <User lookupUser={registeredUser} />
                    </div>
                  ) : null
              )
            : null}
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
          <DownloadExcel userGroupName={userGroupName} startTime={eventStart} />
          <UserDetailHeader />
          {loadUsers(userGroup)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    event: state.event,
    userGroups: state.userGroups[ownProps.match.params.usergroupid],
    usergroupid: state.userGroupsId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchEventByStub, fetchUserGroupIdByStub, fetchUserGroups, clearUsers },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroup);
