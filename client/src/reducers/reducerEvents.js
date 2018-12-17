import _ from "lodash";
import {
  FETCH_EVENTS_START,
  FETCH_EVENTS,
  FETCH_EVENTS_ERROR
} from "../actions/fetchEvents";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS_START:
      return { fetching: true, error:false };

    case FETCH_EVENTS:
      return {
        fetching: false,
        data: _.mapKeys(action.payload.data, "EventUid"),
        error: false
      };

    case FETCH_EVENTS_ERROR:
      return { fetching: false, error: action.payload.response.data.error };
      
    default:
      return state;
  }
}

export function eventFetchingSelector(state){
  return state.fetching
}

export function eventDataSelector(state){
  return state.data
}

export function eventErrorSelector(state){
  return state.error
}
