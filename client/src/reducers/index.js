import { combineReducers } from "redux";
import AuthReducer from "./reducerAuth";
import EventsReducer from "./reducerEvents";
import EventStub from "./reducerStub";
import UserReducer from "./reducerUser";
import UserGroupData from "./reducerUserGroupSelected";
import UserGroupReducer from "./reducerUserGroup";

const rootReducer = combineReducers({
  auth: AuthReducer,
  events: EventsReducer,
  stub: EventStub,
  users: UserReducer,
  userGroups: UserGroupReducer,
  userGroupData: UserGroupData
});

export default rootReducer;
