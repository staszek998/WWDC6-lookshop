import React, { Component } from "react";

class NavItem extends Component {
  render() {
    let dropdownItems = this.props.dropdownItems.map(item => {
      return (
        <a className="dropdown-item text-white" href="#">
          {item}
        </a>
      );
    });

    return (
      <li className="nav-item dropdown">
        <div className="nav-link btn-group">
          <button type="button" className="btn bg-transparent text-white">
            {this.props.text}
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split bg-transparent text-white"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu bg-transparent">{dropdownItems}</div>
        </div>
      </li>
    );
  }
}

export default NavItem;
