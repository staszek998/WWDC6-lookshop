import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className="products">
        <p>
          I'm currently rendering the <b>{this.props.categoryToShow}</b>{" "}
          category.
        </p>
      </div>
    );
  }
}

export default Products;
