import _ from "lodash";
import { FETCH_EVENTS } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, "EventUid");
    default:
      return state;
  }
}
