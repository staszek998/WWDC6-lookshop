import React, { Component } from "react";

class NavItem extends Component {
  render() {
    let dropdownItems = this.props.dropdownItems.map((item, index) => {
      return (
        <a className="dropdown-item" href="#" key={index}>
          {item}
        </a>
      );
    });

    return (
      <li className="nav-item dropdown">
        <div className="nav-link btn-group">
          <button type="button" className="btn bg-transparent p-0">
            {this.props.text}
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split bg-transparent"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu border">{dropdownItems}</div>
        </div>
      </li>
    );
  }
}

export default NavItem;
