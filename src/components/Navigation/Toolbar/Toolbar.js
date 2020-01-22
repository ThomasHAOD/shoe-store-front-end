import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <ul className={classes.Sign}>
        <li onClick={props.signIn}>Sign In</li>
        <li onClick={props.signUp}>Sign Up</li>
      </ul>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
