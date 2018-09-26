import axios from "axios";

export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_STUB = "FETCH_STUB";
export const FETCH_EVENTS_ID = "FETCH_EVENTS_ID";
export const FETCH_USERGROUP = "FETCH_USERGROUP";

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

export function fetchEventsID(eventID) {
  const url = "/api/volunteer/eventsID";
  const request = axios.get(url, { params: { eventID: eventID } });

  return {
    type: FETCH_EVENTS_ID,
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
