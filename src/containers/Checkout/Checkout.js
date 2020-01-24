import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactData from "../Account/ContactData/ContactData";
import * as actions from "../../store/actions/index";
import contactDetails from "../Account/ContactDetails/ContactDetails";

import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";
import ContactDetails from "../Account/ContactDetails/ContactDetails";

class Checkout extends Component {
  state = { ordering: false, enteringDetails: false };

  placeOrderHandler = () => {
    if (this.props.basket[0]) this.setState({ ordering: true });
  };

  orderCancelHandler = () => {
    this.setState({ ordering: false });
  };
  enterDetailsHandler = () => {
    this.setState({ enteringDetails: true });
  };

  enterDetailsCancelHandler = () => {
    this.setState({ enteringDetails: false });
  };

  render() {
    let orderOption = (
      <Button btnType="Success" clicked={this.enterDetailsHandler}>
        Enter Details
      </Button>
    );
    let contactDetails = null;

    if (this.props.userDetails.street) {
      orderOption = (
        <Button
          btnType="Success"
          clicked={() =>
            this.props.onOrderComplete(
              this.props.basket,
              this.props.userDetails.id
            )
          }
        >
          Place Order
        </Button>
      );
      contactDetails = (
        <ul>
          <ContactDetails user={this.props.userDetails} />
        </ul>
      );
    }

    const summary = (
      <div>
        <OrderSummary
          shoes={this.props.basket}
          cancel={this.orderCancelHandler}
        />
        {contactDetails}
        {orderOption}

        <Modal
          show={this.state.enteringDetails}
          modalClosed={this.enterDetailsCancelHandler}
        >
          <ContactData close={this.enterDetailsCancelHandler} />
        </Modal>
      </div>
    );

    return summary;
  }
}

const mapStateToProps = state => {
  return {
    basket: state.basket.shoes,
    userDetails: state.users.activeUser,
    purchased: state.orders.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderComplete: (basket, userId) =>
      dispatch(actions.completeOrder(basket, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
