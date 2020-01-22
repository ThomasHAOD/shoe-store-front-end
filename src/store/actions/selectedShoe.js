import * as actionTypes from "./actionTypes";

export const addShoeToBasket = shoe => {
  return {
    type: actionTypes.ADD_SHOE_TO_BASKET,
    shoe: shoe
  };
};
