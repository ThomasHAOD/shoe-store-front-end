import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/account">Account</NavigationItem>
      <NavigationItem link="/basket">Basket</NavigationItem>
      <NavigationItem link="/">Sign In/Out</NavigationItem>
    </ul>
  );
};

export default navigationItems;
