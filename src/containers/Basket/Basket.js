import React from "react";

import Shoe from "../../components/Shoe/Shoe";
import Button from "../../components/UI/Button/Button";

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

      <Button clicked={() => {}} btnType="Success">
        CHECKOUT
      </Button>
      <Button clicked={props.close} btnType="Danger">
        CANCEL
      </Button>
    </div>
  );
};

export default Basket;
