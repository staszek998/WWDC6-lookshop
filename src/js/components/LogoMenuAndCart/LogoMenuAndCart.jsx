import React, { Component } from "react";
import lookshopLogo from "../../../images/lookshop-logo.png";

class LogoMenuAndCart extends Component {
  render() {
    return (
      <div className="row border">
        <div className="container">
          <div className="row border">
            <div className="col-12 col-md-8 col-lg-3 order-1 border">
              <img src={lookshopLogo} alt="Logo of the lookshop" />
            </div>
            <div className="col-12 col-md-4 col-lg-3 order-2 order-lg-3 border">
              cart (3rd on lg)
            </div>
            <div className="col-12 col-lg-6 order-3 order-lg-2 border">
              menu (2nd on lg)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoMenuAndCart;
