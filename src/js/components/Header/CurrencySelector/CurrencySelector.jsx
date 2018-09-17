import React, { Component } from "react";
import Foundation from 'react-foundation';

class CurrencySelector extends Component {
  render() {
    return (
      <div className="cell shrink">
        <ul className="dropdown menu" data-dropdown-menu>
          <li>
            <a href="#Item-1">Item 1</a>
            <ul className="menu">
              <li>
                <a href="#Item-1A">Item 1A</a>
              </li>
              <li>
                <a href="#Item-1B">Item 1B</a>
                <ul className="menu">
                  <li>
                    <a href="#Item-1Bi">Item 1B i</a>
                  </li>
                  <li>
                    <a href="#Item-1Bii">Item 1B ii</a>
                  </li>
                  <li>
                    <a href="#Item-1Biii">Item 1B iii</a>
                    <ul className="menu">
                      <li>
                        <a href="#Item-1Biiialpha">Item 1B iii alpha</a>
                      </li>
                      <li>
                        <a href="#Item-1Biiiomega">Item 1B iii omega</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Item-1Biv">Item 1B iv</a>
                    <ul className="menu">
                      <li>
                        <a href="#Item-1Bivalpha">Item 1B iv alpha</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#Item-1C">Item 1C</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#Item-2">Item 2</a>
            <ul className="menu">
              <li>
                <a href="#Item-2A">Item 2A</a>
              </li>
              <li>
                <a href="#Item-2B">Item 2B</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#Item-3">Item 3</a>
          </li>
          <li>
            <a href="#Item-4">Item 4</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CurrencySelector;
