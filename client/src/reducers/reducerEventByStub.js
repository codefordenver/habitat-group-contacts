import { FETCH_EVENT_BY_STUB } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENT_BY_STUB:
      return action.payload.data;
    default:
      return state;
  }
}
