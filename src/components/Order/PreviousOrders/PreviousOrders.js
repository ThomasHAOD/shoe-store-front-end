import React from "react";

const reviousOrders = props => {
  const orders = props.orders.map((order, index) => {
    return (
      <div key={index}>
        <h3>Order Number: {order.id}</h3>
        <h3>Total cost: {order.totalCost}</h3>
        <h3>Date ordered: {order.orderDate}</h3>
      </div>
    );
  });

  return orders;
};

export default reviousOrders;
