import { combineReducers } from "redux";
import AuthReducer from "./reducerAuth";
import EventByStubReducer from "./reducerEventByStub";
import EventsReducer from "./reducerEvents";
import EventStub from "./reducerStub";
import UserReducer from "./reducerUser";
import UserGroupReducer from "./reducerUserGroup";
import UserGroupIdReducer from "./reducerUserGroupID";

const rootReducer = combineReducers({
  auth: AuthReducer,
  event: EventByStubReducer,
  events: EventsReducer,
  stub: EventStub,
  users: UserReducer,
  userGroups: UserGroupReducer,
  userGroupsId: UserGroupIdReducer
});

export default rootReducer;
