import { FETCH_EVENTS } from "../actions/fetchEvents";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log("Fetched Events in reducer_events.js");
      console.log("API Request ", action.payload);
      return Object.assign({}, state, {
        events: action.payload.data
      });
    default:
      return state;
  }
}
