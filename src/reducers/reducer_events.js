import { FETCH_EVENTS } from "../actions/fetchEvents";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log("Fetched Events in reducer_events.js");
      return [action.payload, ...state];
    default:
      return state;
  }
}
