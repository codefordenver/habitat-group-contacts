import { FETCH_STUB } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_STUB:
      const key = action.payload.data.event_uid + "/" + action.payload.data.usergroup_uid;
      return {
        ...state,
        [key]: action.payload.data
      };
    default:
      return state;
  }
}
