import axios from "axios";

export const FETCH_EVENTS_START = "FETCH_EVENTS_START";
export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_EVENTS_ERROR = "FETCH_EVENTS_ERROR";

export const FETCH_STUB_START = "FETCH_STUB_START";
export const FETCH_STUB = "FETCH_STUB";

export const FETCH_USERGROUP = "FETCH_USERGROUP";

export const FETCH_USERGROUP_DATA_START = "FETCH_USERGROUP_DATA_START";
export const FETCH_USERGROUP_DATA = "FETCH_USERGROUP_DATA";
export const FETCH_USERGROUP_DATA_ERROR = "FETCH_USERGROUP_DATA_ERROR";
export const CLEAR_USERGROUP_DATA = "CLEAR_USERGROUP_DATA";

export function fetchEvents(startDate, endDate) {
  return dispatch => {
    dispatch({ type: FETCH_EVENTS_START });

    const latestTime = endDate ? `&latestTime=${endDate}` : "";
    const url = "/api/volunteer/events";

    axios
      .get(url, {
        params: { startDate: startDate, latestTime: latestTime }
      })
      .then(res => {
        dispatch({
          type: FETCH_EVENTS,
          payload: res
        });
      })
      .catch(e => {
        dispatch({
          type: FETCH_EVENTS_ERROR,
          payload: e
        });
      });
  };
}

export function fetchStub(eventUID, usergroupUID) {
  const url = "/api/db/stub";
  const request = axios.get(url, {
    params: { eventUID: eventUID, usergroupUID: usergroupUID }
  });

  return {
    type: FETCH_STUB,
    payload: request
  };
}

export function fetchSelectedUserGroupByStub(url_stub) {
  return dispatch => {
    dispatch({ type: FETCH_USERGROUP_DATA_START });
    const url = "/api/db/usergroup";
    axios
      .get(url, { params: { url_stub: url_stub } })
      .then(res => {
        dispatch({
          type: FETCH_USERGROUP_DATA,
          payload: res
        });
      })
      .catch(e => {
        dispatch({
          type: FETCH_USERGROUP_DATA_ERROR,
          payload: e
        });
      });
  };
}

export function clearUserGroupData() {
  return {
    type: CLEAR_USERGROUP_DATA
  };
}

export function fetchUserGroups(page) {
  const url = "/api/volunteer/usergroups";
  const request = axios.get(url, { params: { page: page } });

  return {
    type: FETCH_USERGROUP,
    payload: request
  };
}
