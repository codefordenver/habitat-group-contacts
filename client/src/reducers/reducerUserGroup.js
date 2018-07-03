import _ from 'lodash';
import { FETCH_USERGROUP } from '../actions/fetchUserGroups';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERGROUP:
      return _.mapKeys(action.payload.data, 'UserGroupUid');

    default:
      return state;
  }
}
