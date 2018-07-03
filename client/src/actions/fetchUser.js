import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(id) {
  const url = `/api/v2/users/${id}`;

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
