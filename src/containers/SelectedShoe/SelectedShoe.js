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
      kids: true,
      price: 49.99
    }
  };

  onAddToBasket = () => {
    this.props.onShoeAdded(this.state.shoe);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className={classes.SelectedShoe}>
        <div className={classes.SelectedShoeDetails}>
          <DetailedShoe
            name={this.state.shoe.name}
            brand={this.state.shoe.brand}
            color={this.state.shoe.color}
            size={this.state.shoe.size}
            reviewScore={this.state.shoe.reviewScore}
            mens={this.state.shoe.mens}
            womens={this.state.shoe.womens}
            kids={this.state.shoe.kids}
          />
        </div>
        <Button btnType="Success" clicked={this.onAddToBasket}>
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
