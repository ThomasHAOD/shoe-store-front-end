import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addShoeToBasketStart = () => {
  return { type: actionTypes.ADD_SHOE_TO_BASKET_START };
};

export const addShoeToBasketFail = error => {
  return { type: actionTypes.ADD_SHOE_TO_BASKET_FAIL, error: error };
};

export const addShoeToBasketSuccess = () => {
  return { type: actionTypes.ADD_SHOE_TO_BASKET_SUCCESS };
};
export const addShoeToBasketInit = () => {
  return { type: actionTypes.ADD_SHOE_TO_BASKET_INIT };
};

export const addShoeToBasket = shoe => {
  const id = shoe.id;
  const newStockLevel = shoe.stock - 1;
  return dispatch => {
    dispatch(addShoeToBasketStart());
    axios({
      method: "put",
      url: `http://localhost:8000/shoes/${id}`,
      data: {
        id: id,
        newStockLevel: newStockLevel
      }
    })
      .then(res => {
        dispatch(addShoeToBasketSuccess());
      })
      .catch(err => {
        addShoeToBasketFail(err);
      });
  };
};
