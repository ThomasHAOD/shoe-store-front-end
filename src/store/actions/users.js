import * as actionTypes from "./actionTypes";
import axios from "axios";

export const userSignUp = username => {
  return { type: actionTypes.USER_SIGN_UP, username: username };
};

export const handleUserSignup = () => {
  return dispatch => {
    axios
      .post()
      .then(res => {
        dispatch(console.log(res));
      })
      .catch(err => {
        dispatch(console.log(err));
      });
  };
};

export const userSignIn = user => {
  return { type: actionTypes.USER_SIGN_IN, user: user };
};

export const setUsernames = usernames => {
  return { type: actionTypes.SET_USERNAMES, usernames: usernames };
};

export const fetchUserNamesFailed = () => {
  return { type: actionTypes.FETCH_USERNAMES_FAILED };
};

export const fetchUsernames = () => {
  return dispatch => {
    axios
      .get("http://localhost:8000/users/usernames")
      .then(res => {
        dispatch(setUsernames(res.data));
      })
      .catch(err => {
        dispatch(fetchUsernamesFailed());
      });
  };
};
