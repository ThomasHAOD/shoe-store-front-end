import React from "react";

const reviousOrders = props => {
  const orders = props.orders.map(order => {
    return (
      <div>
        <h3>Order Number</h3>
        <h3>Total cost</h3>
        <h3>Date ordered</h3>
      </div>
    );
  });

  return orders;
};

export default reviousOrders;
