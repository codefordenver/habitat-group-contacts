import { combineReducers } from "redux";
import EventReducer from "./reducerEvent";
import EventsReducer from "./reducerEvents";
import UserReducer from "./reducerUser";
import UserGroupReducer from "./reducerUserGroup";

const rootReducer = combineReducers({
  event: EventReducer,
  events: EventsReducer,
  users: UserReducer,
  userGroups: UserGroupReducer
});

export default rootReducer;
