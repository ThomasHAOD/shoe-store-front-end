import React, { Component } from "react";

import Shoe from "../../components/Shoe/Shoe";

export class Shoes extends Component {
  state = {
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

  render() {
    const shoes = this.state.shoes.map((shoe, index) => {
      return (
        <Shoe
          key={index}
          name={shoe.name}
          brand={shoe.brand}
          color={shoe.colors}
          size={shoe.size}
        />
      );
    });
    return shoes;
  }
}

export default Shoes;
