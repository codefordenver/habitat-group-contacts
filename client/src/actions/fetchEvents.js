import axios from "axios";

export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_STUB = "FETCH_STUB";
export const FETCH_EVENT_BY_STUB = "FETCH_EVENT_BY_STUB";
export const FETCH_USERGROUP = "FETCH_USERGROUP";
export const FETCH_USERGROUP_ID = "FETCH_USERGROUP_ID"

export function fetchEvents(startDate, endDate) {
  const latestTime = endDate ? `&latestTime=${endDate}` : "";
  const url = "/api/volunteer/events";
  const request = axios.get(url, {
    params: { startDate: startDate, latestTime: latestTime }
  });

  return {
    type: FETCH_EVENTS,
    payload: request
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

export function fetchEventByStub(url_stub) {
  const url = "/api/db/event";
  const request = axios.get(url, {
    params: { url_stub: url_stub }
  });

  return {
    type: FETCH_EVENT_BY_STUB,
    payload: request
  };
}

export function fetchUserGroupIdByStub(url_stub) {
  const url = "/api/db/usergroup_id";
  const request = axios.get(url, {
    params: { url_stub: url_stub }
  });

  return {
    type: FETCH_USERGROUP_ID,
    payload: request
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
