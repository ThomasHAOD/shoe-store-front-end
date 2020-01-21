import React from "react";

import classes from "./DetailedShoe.module.css";
import placeholder from "../../../assets/placeholder.jpg";

const detailedShoe = props => {
  return (
    <div className={classes.Shoe}>
      <h1>{props.name}</h1>
      <div className={classes.Details}>
        <img src={placeholder} className={classes.Image} />
        <div>
          <ul className={classes.List}>
            <li>Brand: {props.brand}</li>
            <li>Color: {props.color}</li>
            <li>Size: {props.size}</li>
            <li>Review Score: {props.reviewScore}</li>
            {props.mens ? <li>Mens</li> : null}
            {props.womens ? <li>Womens</li> : null}
            {props.kids ? <li>Kids</li> : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default detailedShoe;
