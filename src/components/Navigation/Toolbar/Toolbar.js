import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import BasketSummary from "../../../containers/Basket/BasketWidget/BasketWidget";

const toolbar = props => {
  let info = (
    <ul className={classes.Sign}>
      <li onClick={props.signIn}>Sign In</li>
      <li onClick={props.signUp}>Sign Up</li>
    </ul>
  );

  if (true) {
    info = <BasketSummary />;
  }
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      {info}
    </header>
  );
};

export default toolbar;
