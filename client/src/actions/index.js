import axios from "axios";
export const FETCH_GOOGLE_USER = "FETCH_GOOGLE_USER";
export const LOGOUT_GOOGLE_USER = "LOGOUT_GOOGLE_USER";
export const LOGIN_GOOGLE_USER = "LOGIN_GOOGLE_USER";

export function fetchGoogleUser() {
  return async dispatch => {
    const res = await axios.get("/api/auth/current_user");
    //console.log(res);
    dispatch({ type: FETCH_GOOGLE_USER, payload: res.data });
  };
}
