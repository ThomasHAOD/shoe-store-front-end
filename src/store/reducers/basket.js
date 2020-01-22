import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  shoes: [
    {
      name: "Funky Trainer",
      image: "./placeholer",
      brand: "Trainer Company",
      colors: "Black",
      size: 7,
      price: 49.99
    },
    {
      name: "Funky Shoe",
      image: "./placeholer",
      brand: "Shoe Company",
      colors: "Red",
      size: 5,
      price: 49.99
    },
    {
      name: "Funky Sandal",
      image: "./placeholer",
      brand: "Sandal Company",
      colors: "Brown",
      size: 10,
      price: 49.99
    }
  ]
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
