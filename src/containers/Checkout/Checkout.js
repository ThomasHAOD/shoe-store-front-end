import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import * as actions from "../../store/actions/index";

import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    // let summary = <Redirect to="/" />;
    // if (this.props.ings) {
    //   const purchasedRedirect = this.props.purchased ? (
    //     <Redirect to="/" />
    //   ) : null;
    const summary = (
      <div>
        {/* {purchasedRedirect} */}
        <OrderSummary />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
    // }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    basket: state.basket.shoes
    // purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
