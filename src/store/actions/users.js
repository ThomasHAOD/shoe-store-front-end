import * as actionTypes from "./actionTypes";
import axios from "axios";

export const userSignUpStart = () => {
  return { type: actionTypes.USER_SIGN_UP_START };
};

export const userSignUpInit = () => {
  return { type: actionTypes.USER_SIGN_UP_INIT };
};

export const userSignUpSuccess = (id, email) => {
  console.log(id);
  return { type: actionTypes.USER_SIGN_UP_SUCCESS, userId: id, email: email };
};

export const userSignUpFail = error => {
  return { type: actionTypes.USER_SIGN_UP_FAIL, error: error };
};

export const userSignUp = email => {
  return dispatch => {
    dispatch(userSignUpStart());
    axios({
      method: "post",
      url: "http://localhost:8000/users",
      data: {
        email: email
      }
    })
      .then(res => {
        console.log(res.data);
        dispatch(userSignUpSuccess(res.data[0].id, email));
      })
      .catch(err => {
        dispatch(userSignUpFail(err));
      });
  };
};
