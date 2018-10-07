import React, { Component } from "react";

// Tabs declarations:
const whatsHot = `WHAT'S HOT?`,
  designers = `DESIGNERS`,
  featured = `FEATURED`,
  latest = `LATEST`;

class Mobile extends Component {
  state = {
    activeCategory: whatsHot
  };

  render() {
    return (
      <div className="container mobile">
        {/* Select */}
        <div className="row select">
          <div className="col">
            <form action="submit" />
            <select
              name="select-or-tabs--mobile"
              id="select-or-tabs--mobile"
              className="form-control bg-transparent text-white border-0"
            >
              <option value={whatsHot}>{whatsHot}</option>
              <option value={designers}>{designers}</option>
              <option value={featured}>{featured}</option>
              <option value={latest}>{latest}</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="row products">
          <div className="col">products</div>
        </div>
      </div>
    );
  }
}

export default Mobile;
