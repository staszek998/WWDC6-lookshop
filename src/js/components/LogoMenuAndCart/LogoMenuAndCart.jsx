import React, { Component } from "react";
import lookshopLogo from "../../../images/lookshop-logo.png";

class LogoMenuAndCart extends Component {
  render() {
    return (
      <div className="row border logo-menu-and-cart">
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
              <div className="row d-lg-none mobile-menu">
                <div className="col-6 d-flex align-items-center">
                  <span className="text-white">MENU</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button
                    className="btn bg-transparent text-white"
                    data-toggle="collapse"
                    type="button"
                    data-target="#mobile-menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
                <div className="col-12 border collapse p-0" id="mobile-menu">
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      new
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      designers
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      women
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      men
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      clearance
                    </a>
                  </div>
                </div>
              </div>

              {/* DESKTOP VERSION */}
              <div className="row d-none d-lg-flex justify-content-end flex-nowrap desktop-menu">
                <div className="col-auto">
                  <select
                    name="new"
                    id="new"
                    className="custom-select border-0 bg-transparent"
                  >
                    <option value="1">new</option>
                    <option value="2">option 1</option>
                    <option value="3">option 2</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select
                    name="designers"
                    id="designers"
                    className="custom-select border-0 bg-transparent"
                  >
                    <option value="1">designers</option>
                    <option value="2">option 1</option>
                    <option value="3">option 2</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select
                    name="women"
                    id="women"
                    className="custom-select border-0 bg-transparent"
                  >
                    <option value="1">women</option>
                    <option value="2">option 1</option>
                    <option value="3">option 2</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select
                    name="men"
                    id="men"
                    className="custom-select border-0 bg-transparent"
                  >
                    <option value="1">men</option>
                    <option value="2">option 1</option>
                    <option value="3">option 2</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select
                    name="clearance"
                    id="clearance"
                    className="custom-select border-0 bg-transparent"
                  >
                    <option value="1">clearance</option>
                    <option value="2">option 1</option>
                    <option value="3">option 2</option>
                  </select>
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
