import React, { Component } from "react";

// Categories declarations:
const whatsHot = `WHAT'S HOT?`,
  designers = `DESIGNERS`,
  featured = `FEATURED`,
  latest = `LATEST`;

class Select extends Component {
  render() {
    return (
      <div className="row select">
        <div className="col">
          <select
            name="select-or-tabs--mobile"
            id="select-or-tabs--mobile"
            className="form-control text-white border-0 my-2"
            onChange={event => {
              this.props.changeHandler(event.target.value);
            }}
          >
            <option value={whatsHot}>{whatsHot}</option>
            <option value={designers}>{designers}</option>
            <option value={featured}>{featured}</option>
            <option value={latest}>{latest}</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
