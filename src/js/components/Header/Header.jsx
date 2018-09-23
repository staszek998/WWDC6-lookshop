import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start py-2 py-md-1 header__left-column">
              <span>CUSTOMER CARE: +22 654 25 98</span>
            </div>
            <div className="col-12 col-md-6 header__right-column">
              <div className="row justify-content-between justify-content-md-end h-100">
                <div className="col-3 col-md-auto border-left border-right p-0">
                  <select
                    name="currency"
                    id="currency"
                    className="custom-select border-0 text-white w-100 bg-transparent"
                  >
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="pln">PLN</option>
                  </select>
                </div>
                <div className="col-6 col-md-auto d-flex justify-content-center align-items-center border-right">
                  <button className="btn bg-transparent text-white">
                    <i className="fas fa-user mr-1" />
                    <span>MY ACCOUNT</span>
                  </button>
                </div>
                <div className="col-3 col-md-auto d-flex justify-content-center align-items-center border-right">
                  <button className="btn text-white bg-transparent">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
