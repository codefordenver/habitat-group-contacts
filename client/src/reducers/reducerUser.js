import _ from 'lodash';
import { FETCH_USER } from '../actions/fetchUser';
import { CLEAR_USERS } from '../actions/clearUsers';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      if (action.payload.data) {
        return {
          ...state,
          [action.payload.data.UserUid]: _.mapKeys(
            action.payload.data.FormAnswers,
            'FormQuestionUid',
          ),
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
