import React from "react";

import classes from "./Shoe.module.css";
import placeholder from "../../assets/placeholder.jpg";
import { NavLink } from "react-router-dom";

const shoe = props => {
  return (
    <NavLink to="/selected-shoe">
      <div className={classes.Shoe}>
        <h3>{props.name}</h3>
        <div className={classes.Details}>
          <img src={placeholder} className={classes.Image} />
          <div>
            <ul className={classes.List}>
              <li>Brand: {props.brand}</li>
              <li>Color: {props.color}</li>
              <li>Size: {props.size}</li>
            </ul>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default shoe;
