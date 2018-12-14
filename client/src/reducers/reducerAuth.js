export const FETCH_GOOGLE_USER = "FETCH_GOOGLE_USER";

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_GOOGLE_USER:
      return action.payload || false;
    default:
      return state;
  }
}
