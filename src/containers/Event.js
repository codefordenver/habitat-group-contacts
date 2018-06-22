import React from 'react';
import _ from 'lodash';
import UserList from './UserList';

const loadUser = users => {
  return (
    <div>
      <h4> Users </h4>
      {_.map(users.UserRegistrations, user => (
        <div key={user.UserUid}>
          <div> User ID - {user.UserUid} </div>
          <div> User Registration Date - {user.RegistrationDate} </div>
          <div>
            User Delete? (Is this if they are still registered) -
            {user.Deleted ? ' True' : ' False'}
          </div>
        </div>
      ))}
    </div>
  );
};

const loadEvent = event => {
  return (
    <div>
      <h1> Event Name: {event.Name} </h1>
      <h2> Event Description: {event.LongDescription} </h2>

      {_.map(event.UserGroupRegistrations, group => (
        <div key={group.UserGroupUid}>
          <h3> UserGroupRegistrations </h3>
          {group.UserGroupUid}
          {loadUser(group)}
        </div>
      ))}
    </div>
  );
};

const FunctionName = props => {
  return (
    <React.Fragment>{props.event ? loadEvent(props.event) : ''}</React.Fragment>
  );
};

export default FunctionName;
