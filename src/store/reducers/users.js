import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  usernames: null,
  activeUser: {
    email: "tam-od@yaya.ya",
    firstName: "Tam",
    lastName: "OD",
    houseNumber: "1",
    street: "street street",
    town: "Edinburgh",
    postCode: "EH1 1AA"
  },
  error: false,
  signedIn: false,
  loading: false
};

const userSignUpInit = (state, action) => {
  return { ...state, signedIn: false };
};

const userSignUpStart = (state, action) => {
  return { ...state, loading: true };
};

const userSignUpSuccess = (state, action) => {
  const newUser = {
    email: action.email,
    firstName: null,
    lastName: null,
    houseNumber: null,
    street: null,
    town: null,
    postCode: null
  };

  return { ...state, activeUser: newUser };
};

const userSignUpFail = (state, action) => {
  return { ...state, loading: false };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_UP_INIT:
      return userSignUpInit(state, action);
    case actionTypes.USER_SIGN_UP_START:
      return userSignUpStart(state, action);
    case actionTypes.USER_SIGN_UP_SUCCESS:
      return userSignUpSuccess(state, action);
    case actionTypes.USER_SIGN_UP_FAIL:
      return userSignUpFail(state, action);
    default:
      return state;
  }
};

export default reducer;
