import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <ul>
        <li onClick={props.signIn}>Sign In</li>
        <li onClick={props.signUp}>Sign Up</li>
      </ul>
    </header>
  );
};

export default toolbar;
