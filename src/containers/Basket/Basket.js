import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Shoe from "../../components/Shoe/Shoe";
import Button from "../../components/UI/Button/Button";

export class Basket extends Component {
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
        <h2>Total Price: £{this.props.price.toFixed(2)}</h2>
        {shoes}
        <Link to="/checkout">Checkout</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoes: state.basket.shoes,
    price: state.basket.totalPrice
  };
};

export default connect(mapStateToProps)(Basket);
