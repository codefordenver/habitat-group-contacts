import { FETCH_USER, CLEAR_USERS } from "../actions/fetchUser";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      if (action.payload.data) {
        console.log(action.payload.data);
        return {
          ...state,
          [action.payload.data.UserUid]: action.payload.data
        };
      } else {
        return state;
      }
    case CLEAR_USERS:
      return {};

    default:
      return state;
  }
}
