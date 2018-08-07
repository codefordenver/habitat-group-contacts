import _ from "lodash";
import { FETCH_EVENTS } from "../actions/fetchEvents";
import { FETCH_EVENTS_ID } from "../actions/fetchEventsID";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return _.mapKeys(action.payload.data, "EventUid");
    case FETCH_EVENTS_ID:
      return action.payload.data;
    default:
      return state;
  }
}
