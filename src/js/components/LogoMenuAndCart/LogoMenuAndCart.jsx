import React, { Component } from "react";
import lookshopLogo from "../../../images/lookshop-logo.png";

class LogoMenuAndCart extends Component {
  render() {
    return (
      <div className="row border logo-menu-and-cart">
        <div className="container">
          <div className="row border">
            <div className="col-12 col-md-8 col-lg-auto order-1 d-flex justify-content-center justify-content-md-start align-items-center border">
              <img
                src={lookshopLogo}
                alt="Logo of the lookshop"
                className="logo-menu-and-cart__logo"
              />
            </div>
            <div className="col-12 col-md-4 col-lg-auto order-2 order-lg-3 border">
              cart (3rd on lg)
            </div>
            <div className="col-12 col-lg-auto ml-lg-auto order-3 order-lg-2 border">
              <nav className="navbar navbar-expand-lg">
                <div className="container">
                  <span className="navbar-brand d-lg-none">MENU</span>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="fas fa-bars" />
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarResponsive"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <div className="nav-link btn-group">
                          <button type="button" className="btn">
                            new
                          </button>
                          <button
                            type="button"
                            className="btn dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              item 1
                            </a>
                            <a className="dropdown-item" href="#">
                              item 2
                            </a>
                            <a className="dropdown-item" href="#">
                              item 3
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <div className="nav-link btn-group">
                          <button type="button" className="btn">
                            designers
                          </button>
                          <button
                            type="button"
                            className="btn dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              item 1
                            </a>
                            <a className="dropdown-item" href="#">
                              item 2
                            </a>
                            <a className="dropdown-item" href="#">
                              item 3
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <div className="nav-link btn-group">
                          <button type="button" className="btn">
                            women
                          </button>
                          <button
                            type="button"
                            className="btn dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              item 1
                            </a>
                            <a className="dropdown-item" href="#">
                              item 2
                            </a>
                            <a className="dropdown-item" href="#">
                              item 3
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <div className="nav-link btn-group">
                          <button type="button" className="btn">
                            men
                          </button>
                          <button
                            type="button"
                            className="btn dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              item 1
                            </a>
                            <a className="dropdown-item" href="#">
                              item 2
                            </a>
                            <a className="dropdown-item" href="#">
                              item 3
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <div className="nav-link btn-group">
                          <button type="button" className="btn">
                            clearance
                          </button>
                          <button
                            type="button"
                            className="btn dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              item 1
                            </a>
                            <a className="dropdown-item" href="#">
                              item 2
                            </a>
                            <a className="dropdown-item" href="#">
                              item 3
                            </a>
                          </div>
                        </div>
                      </li>
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
