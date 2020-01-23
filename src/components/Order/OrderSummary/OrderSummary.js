import React from "react";
import Shoe from "../../Shoe/Shoe";
import Spinner from "react-bootstrap/Spinner";

const orderSummary = props => {
  let shoes = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  if (props.shoes) {
    shoes = props.shoes.map((shoe, index) => {
      return (
        <Shoe
          key={index}
          name={shoe.name}
          brand={shoe.brand}
          color={shoe.colors}
          size={shoe.size}
          shoe={shoe}
        />
      );
    });
  }

  return (
    <div>
      <h1>Order Summary</h1>
      {shoes}
    </div>
  );
};

export default orderSummary;
