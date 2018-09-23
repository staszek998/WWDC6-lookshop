import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 header__left-column">
              <span>CUSTOMER CARE: +22 654 25 98</span>
            </div>
            <div className="col-12 col-md-6 header__right-column">
              <div className="row justify-content-between justify-content-md-end h-100">
                <div className="col-3 col-md-auto border-left border-right">
                  <select
                    name="currency"
                    id="currency"
                    className="custom-select bg-transparent border-0 text-white"
                  >
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="pln">PLN</option>
                  </select>
                </div>
                <div className="col-6 col-md-auto border-right">MY ACCOUNT</div>
                <div className="col-3 col-md-auto border-right">Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
