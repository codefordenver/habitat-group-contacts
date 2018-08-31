import axios from "axios";

export const CLEAR_USERS = "CLEAR_USERS";
export const FETCH_USER = "FETCH_USER";

export function fetchUser(id) {
  const url = "/volunteer/user";

  const request = axios.get(url, { params: { id: id } });

  return {
    type: FETCH_USER,
    payload: request
  };
}

export function clearUsers() {
  return {
    type: CLEAR_USERS
  };
}
