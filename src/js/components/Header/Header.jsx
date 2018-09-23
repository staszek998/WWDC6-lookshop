import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6">CUSTOMER CARE</div>
            <div className="col-12 col-md-6">
              <div className="row justify-content-between justify-content-md-end">
                <div className="col-3 col-md-auto">CURRENCY $</div>
                <div className="col-6 col-md-auto">MY ACCOUNT</div>
                <div className="col-3 col-md-auto">Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
