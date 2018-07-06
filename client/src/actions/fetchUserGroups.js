import axios from 'axios';

export const FETCH_USERGROUP = 'FETCH_USERGROUP';

export function fetchUserGroups() {
  const url = `/api/v1/usergroups`;

  const request = axios.get(url, {
    auth: {
      username: process.env.REACT_APP_VOLUNTEERHUB_USERNAME,
      password: process.env.REACT_APP_VOLUNTEERHUB_PASSWORD
    }
  });

  return {
    type: FETCH_USERGROUP,
    payload: request
  };
}
