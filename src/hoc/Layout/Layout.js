import React, { Component, Fragment } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Modal from "../../components/UI/Modal/Modal";
import SignIn from "../../containers/Account/SignIn/SignIn";
import SignUp from "../../containers/Account/SignUp/SignUp";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    signingIn: false,
    signingUp: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  signInHandler = () => {
    this.setState({ signingIn: true });
  };

  signUpHandler = () => {
    this.setState({ signingUp: true });
  };

  signInCancelHandler = () => {
    this.setState({ signingIn: false });
  };

  signUpCancelHandler = () => {
    this.setState({ signingUp: false });
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          signIn={this.signInHandler}
          signUp={this.signUpHandler}
        />
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
        <Modal
          show={this.state.signingUp}
          modalClosed={this.signUpCancelHandler}
        >
          <SignUp />
        </Modal>
      </Fragment>
    );
  }
}

export default Layout;
