import { combineReducers } from "redux";
import AuthReducer from "./reducerAuth";
import EventReducer from "./reducerEvent";
import EventsReducer from "./reducerEvents";
import EventStub from "./reducerStub";
import UserReducer from "./reducerUser";
import UserGroupReducer from "./reducerUserGroup";

const rootReducer = combineReducers({
  auth: AuthReducer,
  event: EventReducer,
  events: EventsReducer,
  stub: EventStub,
  users: UserReducer,
  userGroups: UserGroupReducer,
});

export default rootReducer;
