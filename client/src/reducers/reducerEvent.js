import { FETCH_EVENTS_ID } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS_ID:
      return action.payload.data;
    default:
      return state;
  }
}
