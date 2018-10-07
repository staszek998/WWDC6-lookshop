import React, { Component } from "react";
import Products from "./Products/Products";
import Select from "./Select/Select";

const whatsHot = `WHAT'S HOT?`;

class Mobile extends Component {
  state = {
    activeCategory: whatsHot
  };

  selectChangeHandler = newCategory => {
    this.setState({
      activeCategory: newCategory
    });
  };

  render() {
    return (
      <div className="container mobile">
        <Select changeHandler={this.selectChangeHandler} />
        <Products categoryToShow={this.state.activeCategory} />
      </div>
    );
  }
}

export default Mobile;
