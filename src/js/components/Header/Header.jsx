import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 header__left-column">
              CUSTOMER CARE: +22 654 25 98
            </div>
            <div className="col-12 col-md-6 header__right-column">
              <div className="row justify-content-between justify-content-md-end">
                <div className="col-3 col-md-auto border-left border-right">
                  CURRENCY $
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
