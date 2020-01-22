import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  usernames: null,
  activeUser: null,
  error: false
};

const setUsernames = (state, action) => {
  return { ...state, usernames: action.usernames };
};

const fetchUsernamesFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const userSignIn = (state, action) => {
  return { ...state, activeUser: action.user };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERNAMES:
      return setUsernames(state, action);
    case actionTypes.FETCH_USERNAMES_FAILED:
      return fetchUsernamesFailed(state, action);
    case actionTypes.USER_SIGN_IN:
      return userSignIn(state, action);
    default:
      return state;
  }
};

export default reducer;
