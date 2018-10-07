import React, { Component } from "react";

import Product from "./Product/Product";
import { database } from "../../../../database/database";
import CollapseToggler from "./CollapseToggler/CollapseToggler";

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

        <CollapseToggler />
      </div>
    );
  }
}

export default Products;
