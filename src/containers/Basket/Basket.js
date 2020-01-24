import React from "react";
import { Link } from "react-router-dom";

import Shoe from "../../components/Shoe/Shoe";
import Button from "../../components/UI/Button/Button";
import classes from "./Basket.module.css";

export const Basket = props => {
  let shoes = <p>Your bakset is empty!</p>;
  if (props.shoes[0]) {
    shoes = props.shoes.map((shoe, index) => {
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
  }

  return (
    <div>
      <h1>Basket</h1>
      <h2>Total Price: £{props.price.toFixed(2)}</h2>
      {shoes}

      <Link to="/checkout" onClick={props.close} className={classes.Checkout}>
        CHECKOUT
      </Link>
      <Button clicked={props.close} btnType="Danger">
        CANCEL
      </Button>
    </div>
  );
};

export default Basket;
