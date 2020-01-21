import React from "react";

import classes from "./Shoe.module.css";
import placeholder from "../../assets/placeholder.jpg";

const shoe = props => {
  return (
    <div className={classes.Shoe}>
      <h3>Funky Trainer</h3>
      <div className={classes.details}>
        <img src={placeholder} className={classes.Image} />
        <div>
          <ul className={classes.List}>
            <li>Brand: Trainer Company</li>
            <li>Colors: Black, Grey</li>
            <li>Sizes: 5-12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default shoe;
