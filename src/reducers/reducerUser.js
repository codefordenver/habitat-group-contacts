import { FETCH_USER } from "../actions/fetchUser";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      console.log("Fetched Events in reducer_events.js");
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
