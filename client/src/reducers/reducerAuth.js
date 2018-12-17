import {FETCHING_GOOGLE_USER, FETCH_GOOGLE_USER_SUCCESS} from "../actions";

export default function(state = false, action) {
  switch (action.type) {
    case FETCHING_GOOGLE_USER:
      return {fetching: true}

    case FETCH_GOOGLE_USER_SUCCESS:
      return {fetching: false, user: action.payload || false};
      
    default:
      return state;
  }
}

export function fetchingUserSelector(state){
  return state.fetching
}

export function userSelector(state){
  return state.user
}
