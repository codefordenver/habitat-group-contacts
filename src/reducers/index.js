import { combineReducers } from "redux";
import EventReducer from "./reducerEvents";
import UserReducer from "./reducerUser";

const rootReducer = combineReducers({
  events: EventReducer,
  user: UserReducer
});

export default rootReducer;
