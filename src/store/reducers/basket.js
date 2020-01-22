import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  shoes: []
};

const addShoeToBasket = (state, action) => {
  const updatedBasket = { shoes: state.shoes.concat(action.shoe) };
  return updateObject(state, updatedBasket);
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
