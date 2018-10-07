import React, { Component } from "react";

import Product from "./Product/Product";

import img1 from "../../../../../images/database/clothes/dresses/king-louie/1.jpg";
import img2 from "../../../../../images/database/clothes/dresses/lee/1.jpg";

class Products extends Component {
  render() {
    return (
      <div className="row products">
        {/* Products shown by default */}
        <Product imgSrc={img1} />
        <Product imgSrc={img2} />

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
