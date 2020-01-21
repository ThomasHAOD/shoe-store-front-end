import React, { Component } from "react";

import DetailedShoe from "../../components/Shoe/DetailedShoe/DetailedShoe";
import classes from "./SelectedShoe.module.css";

export class SelectedShoe extends Component {
  state = {
    name: "Funky Sandal",
    image: "./placeholer",
    brand: "Sandal Company",
    color: "Black",
    size: 5,
    reviewScore: 5,
    mens: true,
    womens: false,
    kids: true
  };
  render() {
    return (
      <div className={classes.SelectedShoe}>
        <DetailedShoe
          name={this.state.name}
          brand={this.state.brand}
          color={this.state.color}
          size={this.state.size}
          reviewScore={this.state.reviewScore}
          mens
          kids
        />
      </div>
    );
  }
}

export default SelectedShoe;
