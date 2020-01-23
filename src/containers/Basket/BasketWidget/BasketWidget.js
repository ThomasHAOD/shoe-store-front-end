import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import classes from "./BasketWidget.module.css";

const BasketSummary = props => {
  return (
    <NavLink
      to="/basket"
      exact
      activeClassName={classes.active}
      className={classes.BasketSummary}
    >
      <div className={classes.BasketCount}>
        <ShoppingBasketIcon />
        <h4>{props.shoeArray.length}</h4>
      </div>

      <h4>£{props.price.toFixed(2)}</h4>
    </NavLink>
  );
};

const mapStateToProps = state => {
  return {
    shoeArray: state.basket.shoes,
    price: state.basket.totalPrice
  };
};

export default connect(mapStateToProps)(BasketSummary);
