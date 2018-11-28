import { FETCH_USERGROUP_DATA, CLEAR_USERGROUP_DATA } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERGROUP_DATA:
      return action.payload.data;

    case CLEAR_USERGROUP_DATA:
      return {};

    default:
      return state;
  }
}
