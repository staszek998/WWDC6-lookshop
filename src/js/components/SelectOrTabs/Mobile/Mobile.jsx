import React, { Component } from "react";
import Products from "./Products/Products";
import Select from "./Select/Select";
import CollapseToggler from "./CollapseToggler/CollapseToggler";

const whatsHot = `WHAT'S HOT?`;

class Mobile extends Component {
  state = {
    activeCategory: whatsHot,
    collapsed: true
  };

  buttonClickHandler = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
        <CollapseToggler
          buttonClickHandler={this.buttonClickHandler}
          collapsed={this.state.collapsed}
        />
      </div>
    );
  }
}

export default Mobile;
