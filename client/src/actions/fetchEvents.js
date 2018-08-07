import axios from "axios";

export const FETCH_EVENTS = "FETCH_EVENTS";

export function fetchEvents(startDate, endDate) {
  const latestTime = endDate ? `&latestTime=${endDate}` : "";
  const url = `/api/v1/events?query=Time&earliestTime=${startDate}${latestTime}`;

  const request = axios.get(url, {
    auth: {
      username: process.env.REACT_APP_VOLUNTEERHUB_USERNAME,
      password: process.env.REACT_APP_VOLUNTEERHUB_PASSWORD
    }
  });

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}
