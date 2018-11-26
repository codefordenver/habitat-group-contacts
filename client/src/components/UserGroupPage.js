import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import { fetchSelectedUserGroupByStub } from "../actions/fetchEvents";
import { clearUsers } from "../actions/fetchUser";
import { bindActionCreators } from "redux";
import UserDetailHeader from "../containers/UserDetailHeader";
import UserGroupDetails from "../containers/UserGroupDetails";
import DownloadExcel from "./DownloadExcel";
import Typography from "@material-ui/core/Typography";

class UserGroup extends Component {
  componentWillMount() {
    // Clear the user list when changing user groups as the download excel is pulling from the Redux Store
    this.props.clearUsers();

    this.props.fetchSelectedUserGroupByStub(this.props.match.params.url_stub);
  }

  render() {
    const { userGroupData } = this.props;

    const eventName = userGroupData ? userGroupData.Name : "Loading...";
    const eventStart = userGroupData ? userGroupData.StartTime : "Loading...";
    const eventEnd = userGroupData ? userGroupData.EndTime : "Loading...";
    const users = userGroupData.Registrations;

    //Need User GroupName
    const userGroupName = userGroupData ? userGroupData.UserGroupName : null;

    const paddingStyle = {
      padding: "12px 24px 12px 24px"
    };

    const loadEventAndUsers = () => {
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
              userGroupName={userGroupName}
              startTime={eventStart}
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
          <div style={paddingStyle}>
            <Typography variant="title" color="inherit">
              Unable to load event data.
            </Typography>

            <Typography variant="subheading" color="inherit">
              Confirm that the url is correct or contact your Habitat for
              Humanity administrator.
            </Typography>
          </div>
        </div>
      );
    };

    return <div>{users ? loadEventAndUsers() : unableToLoadEvent()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userGroupData: state.userGroupData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchSelectedUserGroupByStub, clearUsers },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroup);
