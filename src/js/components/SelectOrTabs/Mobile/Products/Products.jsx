import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className="row products">
        <div className="col">
          I'm currently rendering the <b>{this.props.categoryToShow}</b>{" "}
          category.
        </div>
      </div>
    );
  }
}

export default Products;
