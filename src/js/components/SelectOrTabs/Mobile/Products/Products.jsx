import React, { Component } from "react";

import Product from "./Product/Product";
import { database } from "../../../../database/database";

const whatsHot = `WHAT'S HOT?`,
  designers = `DESIGNERS`,
  featured = `FEATURED`,
  latest = `LATEST`;

class Products extends Component {
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

  render() {
    switch (this.props.categoryToShow) {
      case whatsHot:
        return this.renderProducts(database.clothes.dresses);
        break;

      case designers:
        return this.renderProducts(database.shoes.highHeels);
        break;

      case featured:
        return this.renderProducts(database.underwear.bras);
        break;

      case latest:
        return this.renderProducts(database.accessories.bags);
        break;

      default:
        return this.renderProducts(database.clothes.dresses);
        break;
    }
  }
}

export default Products;
