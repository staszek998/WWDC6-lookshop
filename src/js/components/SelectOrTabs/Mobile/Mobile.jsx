import React, { Component } from "react";
import Products from "./Products/Products";

// Tabs declarations:
const whatsHot = `WHAT'S HOT?`,
  designers = `DESIGNERS`,
  featured = `FEATURED`,
  latest = `LATEST`;

class Mobile extends Component {
  state = {
    activeCategory: whatsHot
  };

  selectChangeHandler = event => {
    this.setState({
      activeCategory: event.target.value
    });
  };

  render() {
    return (
      <div className="container mobile">
        {/* Select */}
        <div className="row select">
          <form action="submit" className="col">
            <select
              name="select-or-tabs--mobile"
              id="select-or-tabs--mobile"
              className="form-control text-white border-0"
              onChange={this.selectChangeHandler}
            >
              <option value={whatsHot}>{whatsHot}</option>
              <option value={designers}>{designers}</option>
              <option value={featured}>{featured}</option>
              <option value={latest}>{latest}</option>
            </select>
          </form>
        </div>

        <Products categoryToShow={this.state.activeCategory} />
      </div>
    );
  }
}

export default Mobile;
