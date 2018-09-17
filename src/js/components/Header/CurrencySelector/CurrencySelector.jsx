import React, { Component } from "react";

class CurrencySelector extends Component {
  render() {
    return (
      <div className="cell shrink">
        <ul className="menu" data-dropdown-menu>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
          <li>
            <a href="#">Item 3</a>
          </li>
          <li>
            <a href="#">Item 4</a>
          </li>
          <li>
            <a href="#">Item 5</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CurrencySelector;
