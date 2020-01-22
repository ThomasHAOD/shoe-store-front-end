import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  shoes: [],
  totalPrice: 0
};

const addShoeToBasket = (state, action) => {
  const updatedShoes = state.shoes.concat(action.shoe);
  const updatedState = {
    shoes: updatedShoes,
    totalPrice: state.totalPrice + action.shoe.price
  };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SHOE_TO_BASKET:
      return addShoeToBasket(state, action);
    default:
      return state;
  }
};

export default reducer;
