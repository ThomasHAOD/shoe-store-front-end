import React, { Component, Fragment } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Modal from "../../components/UI/Modal/Modal";
import SignIn from "../../containers/Account/SignIn/SignIn";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    signingIn: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  signInCancelHandler = () => {
    this.setState({ signingIn: false });
  };

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
        <Modal
          show={this.state.signingIn}
          modalClosed={this.signInCancelHandler}
        >
          <SignIn />
        </Modal>
      </Fragment>
    );
  }
}

export default Layout;
