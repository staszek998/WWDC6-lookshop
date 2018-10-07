import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product col-6 px-2">
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className="d-block"
        />

        <div className="wrapper d-flex flex-column justify-content-around align-items-center py-2 px-3">
          <span className="title">CLOTHING TITLE</span>
          <span className="price">$99.99</span>
          <button className="btn rounded-0">
            ADD TO CART <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
