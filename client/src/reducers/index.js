import { combineReducers } from 'redux';
import EventReducer from './reducerEvents';
import UserReducer from './reducerUser';
import UserGroupReducer from './reducerUserGroup';

const rootReducer = combineReducers({
  events: EventReducer,
  users: UserReducer,
  userGroups: UserGroupReducer,
});

export default rootReducer;
