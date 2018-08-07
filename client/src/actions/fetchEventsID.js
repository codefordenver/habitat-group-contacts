import axios from "axios";

export const FETCH_EVENTS_ID = "FETCH_EVENTS_ID";

export function fetchEventsID(eventID) {
  const url = `/api/v1/events/${eventID}`;

  const request = axios.get(url, {
    auth: {
      username: process.env.REACT_APP_VOLUNTEERHUB_USERNAME,
      password: process.env.REACT_APP_VOLUNTEERHUB_PASSWORD
    }
  });

  return {
    type: FETCH_EVENTS_ID,
    payload: request
  };
}
