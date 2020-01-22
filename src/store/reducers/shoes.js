import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  shoes: null,
  error: false
};

const setShoes = (state, action) => {
  return { ...state, shoes: action.shoes };
};

const fetchShoesFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHOES:
      return setShoes(state, action);
    case actionTypes.FETCH_SHOES_FAILED:
      return fetchShoesFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
