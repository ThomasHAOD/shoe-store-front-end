import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  purchased: false
};

const completeOrder = (state, action) => {
  const updatedOrders = [...state.orders, action.orderId];

  const updatedState = { orders: updatedOrders, purchased: true };

  return updatedState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPLETE_ORDER:
      return completeOrder(state, action);
    default:
      return state;
  }
};

export default reducer;
