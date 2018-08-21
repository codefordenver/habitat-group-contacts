import { combineReducers } from "redux";
import AuthReducer from "./reducerAuth";
import EventReducer from "./reducerEvent";
import EventsReducer from "./reducerEvents";
import UserReducer from "./reducerUser";
import UserGroupReducer from "./reducerUserGroup";

const rootReducer = combineReducers({
  auth: AuthReducer,
  event: EventReducer,
  events: EventsReducer,
  users: UserReducer,
  userGroups: UserGroupReducer
});

export default rootReducer;
