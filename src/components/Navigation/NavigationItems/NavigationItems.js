import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem>Account</NavigationItem>
      <NavigationItem>Basket</NavigationItem>
      <NavigationItem>Sign In/Out</NavigationItem>
    </ul>
  );
};

export default navigationItems;
