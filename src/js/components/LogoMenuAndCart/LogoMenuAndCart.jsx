import React, { Component } from "react";

import lookshopLogo from "../../../images/lookshop-logo.png";
import NavItem from "./NavItem";
import Cart from "./Cart";

class LogoMenuAndCart extends Component {
  render() {
    return (
      <div className="row logo-menu-and-cart">
        <div className="container">
          <div className="row">
            {/* LOGO */}
            <div className="col-12 col-md-8 col-lg-auto order-1 d-flex justify-content-center justify-content-md-start align-items-center">
              <img
                src={lookshopLogo}
                alt="Logo of the lookshop"
                className="logo-menu-and-cart__logo"
              />
            </div>

            {/* CART */}
            <div className="col-12 col-md-4 col-lg-auto order-2 order-lg-3">
              <Cart />
            </div>

            {/* NAVBAR */}
            <div className="col-12 col-lg-auto ml-lg-auto order-3 order-lg-2 p-lg-0">
              <nav className="navbar navbar-expand-lg p-lg-0">
                <div className="container p-lg-0">
                  <span className="navbar-brand d-lg-none text-white">
                    MENU
                  </span>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="fas fa-bars text-white" />
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarResponsive"
                  >
                    <ul className="navbar-nav ml-auto">
                      <NavItem
                        text="new"
                        dropdownItems={["item 1", "item 123", "item 342"]}
                      />
                      <NavItem
                        text="designers"
                        dropdownItems={["item 1", "item 123", "item 342"]}
                      />
                      <NavItem
                        text="women"
                        dropdownItems={["item 1", "item 123", "item 342"]}
                      />
                      <NavItem
                        text="men"
                        dropdownItems={["item 1", "item 123", "item 342"]}
                      />
                      <NavItem
                        text="clearance"
                        dropdownItems={["item 1", "item 123", "item 342"]}
                      />
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoMenuAndCart;
