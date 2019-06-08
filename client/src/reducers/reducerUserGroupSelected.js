import {
  FETCH_USERGROUP_DATA_START,
  FETCH_USERGROUP_DATA,
  FETCH_USERGROUP_DATA_ERROR,
  CLEAR_USERGROUP_DATA
} from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERGROUP_DATA_START:
      return { fetching: true, error: false };

    case FETCH_USERGROUP_DATA:
      return {fetching: false, data: action.payload.data, error: false };

    case FETCH_USERGROUP_DATA_ERROR:
      return {fetching: false, error: action.payload.response.data.error };

    case CLEAR_USERGROUP_DATA:
      return {};

    default:
      return state;
  }
}

export function usergroupFetchingSelector(state){
  return state.fetching
}

export function usergroupDataSelector(state){
  return state.data
}

export function usergroupErrorSelector(state){
  return state.error
}
