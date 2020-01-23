import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Account.module.css";

export class Account extends Component {
  render() {
    return (
      <div className={classes.AccountDetails}>
        <h1>Your Account</h1>
        <h3>Your Details</h3>
        <ul>
          <li>
            Name: {this.props.user.firstName} {this.props.user.lastName}
          </li>
          <li>E-mail: {this.props.user.email}</li>
          <li>user_id: {this.props.user.id}</li>
          <li>
            Address: {this.props.user.houseNumber} {this.props.user.street}
          </li>
          <li>{this.props.user.town}</li>
          <li>{this.props.user.postCode}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.users.activeUser };
};

export default connect(mapStateToProps)(Account);
