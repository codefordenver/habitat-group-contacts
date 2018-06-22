import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser() {
  const url =
    'https://denver.volunteerhub.com/api/v1/events?query=Time&earliestTime=2018-06-14T01:00:00';

  const request = axios.get(url, {
    auth: {
      username: process.env.REACT_APP_VOLUNTEERHUB_USERNAME,
      password: process.env.REACT_APP_VOLUNTEERHUB_PASSWORD
    }
  });

  return {
    type: FETCH_USER,
    payload: request
  };
}
