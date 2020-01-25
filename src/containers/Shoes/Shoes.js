import React, { Component } from "react";
import { connect } from "react-redux";

import Shoe from "../../components/Shoe/Shoe";
import * as actions from "../../store/actions/index";
import Spinner from "react-bootstrap/Spinner";
import Search from "../../components/Search/Search";

export class Shoes extends Component {
  componentDidMount() {
    this.props.onFetchShoes();
  }

  shoeSelectHandler = shoe => {
    this.props.onShoeSelect(shoe);
    this.props.history.push("/selected-shoe");
  };

  render() {
    let shoes = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
    if (this.props.shoes) {
      shoes = this.props.shoes.map((shoe, index) => {
        return (
          <Shoe
            key={index}
            name={shoe.name}
            brand={shoe.brand}
            color={shoe.color}
            size={shoe.size}
            clicked={this.shoeSelectHandler}
            shoe={shoe}
          />
        );
      });
    }
    return <Search />;
    // return shoes;
  }
}

const mapStateToProps = state => {
  return {
    shoes: state.shoes.shoes
  };
};

const dispatchStateToProps = dispatch => {
  return {
    onFetchShoes: () => dispatch(actions.fetchShoes()),
    onShoeSelect: shoe => dispatch(actions.selectShoe(shoe))
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Shoes);
