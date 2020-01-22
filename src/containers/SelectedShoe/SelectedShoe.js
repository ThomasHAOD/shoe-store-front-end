import React, { Component } from "react";
import { connect } from "react-redux";

import DetailedShoe from "../../components/Shoe/DetailedShoe/DetailedShoe";
import Styles from "../../components/Styles/Styles";
import HowDoesItFit from "../../components/HowDoesItFit/HowDoesItFit";
import Button from "../../components/UI/Button/Button";
import classes from "./SelectedShoe.module.css";
import * as actions from "../../store/actions/index";

export class SelectedShoe extends Component {
  state = {
    shoe: {
      name: "Funky Sandal",
      image: "./placeholer",
      brand: "Sandal Company",
      color: "Black",
      size: 5,
      reviewScore: 5,
      mens: true,
      womens: false,
      kids: true
    }
  };
  render() {
    return (
      <div className={classes.SelectedShoe}>
        <div className={classes.SelectedShoeDetails}>
          <DetailedShoe
            name={this.state.name}
            brand={this.state.brand}
            color={this.state.color}
            size={this.state.size}
            reviewScore={this.state.reviewScore}
            mens
            kids
          />
        </div>
        <Button
          btnType="Success"
          clicked={() => this.props.onShoeAdded(this.state.shoe)}
        >
          Add To Basket
        </Button>
        <HowDoesItFit />
        <Styles />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { onShoeAdded: shoe => dispatch(actions.addShoeToBasket(shoe)) };
};

export default connect(null, mapDispatchToProps)(SelectedShoe);
