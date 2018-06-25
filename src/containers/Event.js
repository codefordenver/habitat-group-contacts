import React from 'react';
import _ from 'lodash';
import UserData from '../components/UserData';
import UserList from './UserList';

const loadUser = group => {
  return (
    <div>
      <h4> Users </h4>
      {_.map(group.UserRegistrations, user => (
        <div key={user.UserUid}>
          <div> User ID - {user.UserUid} </div>
          <div> User Registration Date - {user.RegistrationDate} </div>
          <div>
            User Delete? (Is this if they are still registered) -
            {user.Deleted ? ' True' : ' False'}
          </div>
          <UserData userID={user.UserUid} />
        </div>
      ))}
    </div>
  );
};

const loadEvent = (event, userGroup) => {
  return (
    <div>
      <h1> Event Name: {event.Name} </h1>
      <h2> Event Description: {event.LongDescription} </h2>

      {_.map(event.UserGroupRegistrations, group => (
        <div key={group.UserGroupUid}>
          {/* Why is UserGroupUid for first group exist without name or users? */}
          <h3> UserGroupRegistrations </h3>
          <div />
          {userGroup[group.UserGroupUid]
            ? userGroup[group.UserGroupUid].Name
            : ''}
          <div />
          {group.UserGroupUid}

          {loadUser(group)}
        </div>
      ))}
    </div>
  );
};

const FunctionName = props => {
  return (
    <React.Fragment>
      {props.event ? loadEvent(props.event, props.userGroups) : ''}
    </React.Fragment>
  );
};

export default FunctionName;
