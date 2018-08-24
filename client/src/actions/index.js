import axios from 'axios';
export const FETCH_GOOGLE_USER = "FETCH_GOOGLE_USER";

export function fetchGoogleUser () {
  return (
    async dispatch => {
      const res = await axios.get('/auth/current_user');
      console.log(res);
      dispatch({ type: FETCH_GOOGLE_USER, payload: res.data });
    }
  );
}
