import { FETCH_USER } from '../actions/fetchUser';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        [action.payload.data.UserUid]: action.payload.data.FormAnswers
      };

    default:
      return state;
  }
}
