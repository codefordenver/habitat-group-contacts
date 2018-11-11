import { FETCH_USERGROUP_DATA } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERGROUP_DATA:
      return action.payload.data;

    default:
      return state;
  }
}
