import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import {
  fetchSelectedUserGroupByStub,
  clearUserGroupData
} from "../actions/fetchEvents";
import { clearUsers } from "../actions/fetchUser";
import { bindActionCreators } from "redux";
import UserDetailHeader from "../containers/UserDetailHeader";
import UserGroupDetails from "../containers/UserGroupDetails";
import DownloadExcel from "./DownloadExcel";
import Typography from "@material-ui/core/Typography";
import ErrorIndicator from "../containers/ErrorIndicator";
import { withRouter } from "react-router";

class UserGroup extends Component {
  state = {
    prevLocation: null
  };

  static getDerivedStateFromProps(props, state) {
    if (props.location !== state.prevLocation) {
      props.clearUsers();
      props.clearUserGroupData();
      props.fetchSelectedUserGroupByStub(props.match.params.url_stub);
      return {
        prevLocation: props.location
      };
    }
    return null;
  }

  render() {
    let eventName = null;
    let eventStart = null;
    let eventEnd = null;
    let users = null;
    let userGroupData = null;

    userGroupData = this.props.userGroupData;

    eventName = userGroupData ? userGroupData.Name : "Loading...";
    eventStart = userGroupData ? userGroupData.StartTime : "Loading...";
    eventEnd = userGroupData ? userGroupData.EndTime : "Loading...";
    users = userGroupData.Registrations;

    //Need User GroupName
    const userGroupName = userGroupData ? userGroupData.UserGroupName : null;

    const paddingStyle = {
      padding: "12px 24px 12px 24px"
    };

    const loadEventAndUsers = users => {
      return (
        <div>
          <UserGroupDetails
            eventName={eventName}
            userGroupName={userGroupName}
            startTime={eventStart}
            endTime={eventEnd}
          />

          <div style={paddingStyle}>
            <DownloadExcel
              key={this.props.match.params.url_stub}
              userGroupName={userGroupName}
              startTime={eventStart}
              users={this.props.users}
            />

            <UserDetailHeader />

            <div>
              {users
                ? users.map(user =>
                    !user.Deleted ? (
                      <div key={user.UserUid}>
                        <User lookupUser={user} />
                      </div>
                    ) : null
                  )
                : null}
            </div>
          </div>
        </div>
      );
    };

    const unableToLoadEvent = () => {
      return (
        <div>
          <ErrorIndicator>
            <div style={paddingStyle}>
              <Typography variant="title" color="inherit">
                Unable to load event data.
              </Typography>

              <Typography variant="subheading" color="inherit">
                Confirm that the url is correct or contact your Habitat for
                Humanity administrator.
              </Typography>
            </div>
          </ErrorIndicator>
        </div>
      );
    };

    return <div> {users ? loadEventAndUsers(users) : unableToLoadEvent()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userGroupData: state.userGroupData,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { clearUsers, fetchSelectedUserGroupByStub, clearUserGroupData },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserGroup)
);
