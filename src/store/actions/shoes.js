import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setShoes = shoes => {
  return { type: actionTypes.SET_SHOES, shoes: shoes };
};

export const fetchShoesFailed = () => {
  return {
    type: actionTypes.FETCH_SHOES_FAILED
  };
};

export const fetchShoes = () => {
  return dispatch => {
    axios
      .get("http://localhost:8000/shoes")
      .then(res => {
        dispatch(setShoes(res.data));
      })
      .catch(err => {
        dispatch(fetchShoesFailed());
      });
  };
};
