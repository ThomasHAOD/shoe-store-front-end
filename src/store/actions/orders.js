import * as actionTypes from "./actionTypes";
import axios from "axios";

export const orderStart = () => {
  return { type: actionTypes.ORDER_START };
};
export const orderFail = () => {
  return { type: actionTypes.ORDER_FAIL };
};
export const orderSuccess = orderId => {
  return { type: actionTypes.ORDER_SUCCESS, orderId: orderId };
};

export const orderInit = () => {
  return { type: actionTypes.ORDER_INIT };
};

export const completeOrder = (basket, userId) => {
  return dispatch => {
    console.log(basket, userId);

    dispatch(orderStart());
    axios({
      method: "post",
      url: "http://localhost:8000/orders",
      data: { userId: userId }
    })
      .then(res => {
        basket.forEach(shoe => {
          axios({
            method: "post",
            url: `http://localhost:8000/shoes-orders`,
            data: { shoeId: shoe.id, orderId: res.data[0].id }
          })
            .then(res => {})
            .catch(err => {
              dispatch(orderFail(err));
            });
        });
      })
      .then(res => {
        dispatch(orderSuccess(res.data[0].id));
      })
      .catch(err => {
        orderFail(err);
      });
  };
};
