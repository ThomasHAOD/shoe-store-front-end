import React, { Component } from "react";

export class Basket extends Component {
  state = {
    items: [
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
    ],
    totalPrice: null
  };

  render() {
    return <div>Basket</div>;
  }
}

export default Basket;
