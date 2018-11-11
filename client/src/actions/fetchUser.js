import axios from "axios";

export const CLEAR_USERS = "CLEAR_USERS";
export const FETCH_USER = "FETCH_USER";

export function fetchUser(id) {
  //UPDATE TO DB
  const url = "/api/db/user";

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
