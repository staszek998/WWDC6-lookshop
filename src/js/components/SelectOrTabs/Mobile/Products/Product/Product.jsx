import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product col-6 px-2 mt-3">
        <img
          src={this.props.productObject.images[0]}
          alt={`Photo of the ${this.props.productObject.title} by ${
            this.props.productObject.brand
          }`}
          className="d-block"
        />

        <div className="wrapper d-flex flex-column justify-content-around align-items-center py-2 px-3">
          <span className="title">{this.props.productObject.title}</span>
          <span className="price">{`$${Number(
            this.props.productObject.price
          ).toFixed(2)}`}</span>
          <button className="btn rounded-0">
            ADD TO CART <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
