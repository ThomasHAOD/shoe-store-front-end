import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Account.module.css";
import ContactDetails from "./ContactDetails/ContactDetails";

export class Account extends Component {
  render() {
    return (
      <div className={classes.AccountDetails}>
        <h1>Your Account</h1>
        <h3>Your Details</h3>
        <ul>
          <li>E-mail: {this.props.user.email}</li>
          <li>user_id: {this.props.user.id}</li>
          <ContactDetails user={this.props.user} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.users.activeUser };
};

export default connect(mapStateToProps)(Account);
