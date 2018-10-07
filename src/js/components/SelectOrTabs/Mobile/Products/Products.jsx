import React, { Component } from "react";

import Product from "./Product/Product";
import { database } from "../../../../database/database";

const whatsHot = `WHAT'S HOT?`;

class Products extends Component {
  state = {
    collapsed: true
  };

  renderProducts = productsToRender => {
    return (
      <div className="row products">
        {/* Products shown by default */}
        <Product productObject={productsToRender[0]} />
        <Product productObject={productsToRender[1]} />

        {/* Products initially collapsed */}
        <div className="col-12 collapse" id="hiddenProducts">
          <div className="row">
            {productsToRender.map((product, index) => {
              if (index < 2) {
                return null;
              } else {
                return <Product productObject={product} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  buttonClickHandler = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="row products">
        {/* Products shown by default */}
        <Product productObject={dresses[0]} />
        <Product productObject={dresses[1]} />

        {/* Products initially collapsed */}
        <div className="col-12 collapse" id="hiddenProducts">
          <div className="row">
            {dresses.map((dress, index) => {
              if (index < 2) {
                return null;
              } else {
                return <Product productObject={dress} />;
              }
            })}
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
            onClick={this.buttonClickHandler}
          >
            {this.state.collapsed ? "LOAD MORE" : "SHOW LESS"}
          </button>
        </div>
      </div>
    );
  }
}

export default Products;
