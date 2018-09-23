import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row border">
        <div className="container">
          <div className="row justify-content-between border">
            <div className="col-12 col-md-6 border">CUSTOMER CARE</div>
            <div className="col-12 col-md-6 border">
              <div className="row justify-content-between justify-content-md-end border">
                <div className="col-3 col-md-auto border">CURRENCY $</div>
                <div className="col-6 col-md-auto border">MY ACCOUNT</div>
                <div className="col-3 col-md-auto border">Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
