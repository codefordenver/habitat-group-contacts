import _ from "lodash";
import { FETCH_USERGROUP } from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERGROUP:
      return Object.assign(
        {},
        state,
        _.mapKeys(action.payload.data, "UserGroupUid")
      );

    default:
      return state;
  }
}
