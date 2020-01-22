import React, { Component } from "react";
import { connect } from "react-redux";

import Shoe from "../../components/Shoe/Shoe";

export class Basket extends Component {
  state = {
    totalPrice: null
  };

  render() {
    const shoes = this.props.shoes.map((shoe, index) => {
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

    return (
      <div>
        <h1>Basket</h1>
        {shoes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoes: state.basket.shoes
  };
};

export default connect(mapStateToProps)(Basket);
