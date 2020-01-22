import React, { Component } from "react";
import { connect } from "react-redux";

import Shoe from "../../components/Shoe/Shoe";
import * as actions from "../../store/actions/index";
import Spinner from "react-bootstrap/Spinner";

export class Shoes extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.onFetchShoes();
  }

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
            color={shoe.colors}
            size={shoe.size}
          />
        );
      });
      console.log(this.props);
    }

    return shoes;
  }
}

const mapStateToProps = state => {
  return {
    shoes: state.shoes.shoes
  };
};

const dispatchStateToProps = dispatch => {
  return {
    onFetchShoes: () => dispatch(actions.fetchShoes())
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Shoes);
