import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product col-6">
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        <div className="row">
          <div className="col-12 text-center text-dark">
            <span>CLOTHING TITLE</span>
            <span>$99.99</span>
            <button className="btn rounded-0">
              ADD TO CART <i className="fas fa-plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
