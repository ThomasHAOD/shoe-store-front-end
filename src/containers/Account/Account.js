import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Account.module.css";
import ContactDetails from "./ContactDetails/ContactDetails";
import PreviousOrders from "../../components/Order/PreviousOrders/PreviousOrders";

export class Account extends Component {
  render() {
    let details = <h3>Please sign up!</h3>;

    if (this.props.user.id) {
      details = (
        <div className={classes.AccountDetails}>
          <h1>Your Account</h1>
          <h3>Your Details</h3>
          <ul>
            <li>E-mail: {this.props.user.email}</li>
            <li>user_id: {this.props.user.id}</li>
            <ContactDetails user={this.props.user} />
          </ul>
          <PreviousOrders orders={this.props.previousOrders} />
        </div>
      );
    }

    return details;
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.activeUser,
    previousOrders: state.orders.previousOrders
  };
};

export default connect(mapStateToProps)(Account);
