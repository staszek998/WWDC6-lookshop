import React, { Component } from "react";

class NavItem extends Component {
  render() {
    let dropdownItems = this.props.dropdownItems.map(item => {
      return (
        <a className="dropdown-item" href="#">
          {item}
        </a>
      );
    });

    return (
      <li className="nav-item dropdown">
        <div className="nav-link btn-group">
          <button type="button" className="btn">
            {this.props.text}
          </button>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">{dropdownItems}</div>
        </div>
      </li>
    );
  }
}

export default NavItem;
