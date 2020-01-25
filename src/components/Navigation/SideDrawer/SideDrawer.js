import React, { Fragment } from "react";

// import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../../assets/Golden-shoe-logo.png";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <header className={classes.Header}>
          <img src={Logo} alt="golden-shoe-logo" className={classes.Logo} />
        </header>

        <nav>
          <DrawerToggle clicked={props.drawerToggleClicked} />
          <NavigationItems clicked={props.drawerToggleClicked} />
        </nav>
        <footer className={classes.Footer}>
          ©2020 AND Digital & Golden Shoe
        </footer>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
