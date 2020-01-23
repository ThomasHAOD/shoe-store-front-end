import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import * as actions from "../../store/actions/index";

import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";

class Checkout extends Component {
  state = { ordering: false };

  placeOrderHandler = () => {
    if (this.props.basket[0]) this.setState({ ordering: true });
  };

  orderCancelHandler = () => {
    this.setState({ ordering: false });
  };

  render() {
    const summary = (
      <div>
        <OrderSummary
          shoes={this.props.basket}
          cancel={this.orderCancelHandler}
        />
        <Button btnType="Success" clicked={this.placeOrderHandler}>
          Place Order
        </Button>
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
        <Modal show={this.state.ordering} modalClosed={this.orderCancelHandler}>
          <ContactData />
        </Modal>
      </div>
    );

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
