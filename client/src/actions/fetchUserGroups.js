import axios from "axios";

export const FETCH_USERGROUP = "FETCH_USERGROUP";

export function fetchUserGroups(page) {
  const url = `/api/v1/usergroups?${page}&pageSize=50`;

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
