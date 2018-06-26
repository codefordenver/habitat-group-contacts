import { FETCH_USER } from "../actions/fetchUser";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      if (action.payload.data) {
        return {
          ...state,
          [action.payload.data.UserUid]: action.payload.data.FormAnswers
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
