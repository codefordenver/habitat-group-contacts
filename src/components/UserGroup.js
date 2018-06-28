import React, { Component } from 'react';
import _ from 'lodash';
import User from './User';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/fetchEvents';
import { fetchUserGroups } from '../actions/fetchUserGroups';
import { bindActionCreators } from 'redux';
import UserDetailHeader from '../containers/UserDetailHeader';

class UserGroup extends Component {
  componentWillMount() {
    this.props.fetchEvents();
    this.props.fetchUserGroups();
  }

  render() {
    const { event } = this.props;
    const { usergroupid } = this.props.match.params;

    const findUserGroup = (event, usergroupid) => {
      return event
        ? _.mapKeys(event.UserGroupRegistrations, 'UserGroupUid')[usergroupid]
        : null;
    };

    const userGroup = findUserGroup(event, usergroupid);

    const loadUsers = userGroup => {
      return (
        <div>
          {userGroup
            ? _.map(userGroup.UserRegistrations, user => (
                <div key={user.UserUid}>
                  <User lookupUser={user} />
                </div>
              ))
            : ''}
        </div>
      );
    };

    return (
      <div>
        <h1> Users </h1>
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
