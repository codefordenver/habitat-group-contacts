import axios from "axios";

export const FETCHING_GOOGLE_USER = "FETCHING_GOOGLE_USER";
export const FETCH_GOOGLE_USER_SUCCESS = "FETCH_GOOGLE_USER_SUCCESS";

export function fetchGoogleUser() {
  return async dispatch => {
    dispatch({type: FETCHING_GOOGLE_USER})
    
    const res = await axios.get("/api/auth/current_user");
    //console.log(res);
    dispatch({ type: FETCH_GOOGLE_USER_SUCCESS, payload: res.data });
  };
}
