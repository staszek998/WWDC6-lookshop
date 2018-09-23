import React, { Component } from "react";
import lookshopLogo from "../../../images/lookshop-logo.png";

class LogoMenuAndCart extends Component {
  render() {
    return (
      <div className="row border">
        <div className="container">
          <div className="row border">
            <div className="col-12 col-md-8 col-lg-3 order-1 d-flex justify-content-center justify-content-md-start align-items-center border">
              <img src={lookshopLogo} alt="Logo of the lookshop" />
            </div>
            <div className="col-12 col-md-4 col-lg-3 order-2 order-lg-3 border">
              cart (3rd on lg)
            </div>
            <div className="col-12 col-lg-6 order-3 order-lg-2 border">
              {/* MOBILE VERSION */}
              <div className="row d-md-none">
                <div className="col-6 d-flex align-items-center">
                  <span>MENU</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button
                    className="btn bg-transparent"
                    data-toggle="collapse"
                    type="button"
                    data-target="#mobile-menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
                <div className="col-12 border collapse" id="mobile-menu">
                  <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoMenuAndCart;
