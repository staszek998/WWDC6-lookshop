import React, { Component } from "react";
import Product from "./Product/Product";

class Products extends Component {
  render() {
    return (
      <div className="row products">
        {/* Products shown by default */}
        <Product />
        <Product />

        {/* Products initially collapsed */}
        <div className="col-12 collapse" id="hiddenProducts">
          <div className="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>

        {/* Collapse toggler */}
        <div className="col-12 text-center py-3">
          <button
            className="btn border-0 rounded-0 bg-dark text-white"
            type="button"
            data-toggle="collapse"
            data-target="#hiddenProducts"
            aria-expanded="false"
            aria-controls="hiddenProducts"
          >
            LOAD MORE
          </button>
        </div>
      </div>
    );
  }
}

export default Products;
