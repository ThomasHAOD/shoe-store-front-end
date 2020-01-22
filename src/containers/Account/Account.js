import React, { Component } from "react";
import classes from "./Account.module.css";

export class Account extends Component {
  state = {
    user: {
      firstName: "Tam",
      lastName: "OD",
      houseNumber: "1",
      street: "street street",
      town: "Edinburgh",
      postCode: "EH1 1AA"
    }
  };
  render() {
    return (
      <div className={classes.AccountDetails}>
        <h1>Your Account</h1>
        <h3>Your Details</h3>
        <ul>
          <li>
            Name: {this.state.user.firstName} {this.state.user.lastName}
          </li>
          <li>
            Address: {this.state.user.houseNumber} {this.state.user.street}
          </li>
          <li>{this.state.user.town}</li>
          <li>{this.state.user.postCode}</li>
        </ul>
      </div>
    );
  }
}

export default Account;
