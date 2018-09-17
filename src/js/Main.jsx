import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import CustomerCare from "./components/Header/CustomerCare/CustomerCare";
// import CurrencySelector from "./components/Header/CurrencySelector/CurrencySelector";
// import MyAccount from "./components/Header/MyAccount/MyAccount";
// import Search from "./components/Header/Search/Search";

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="container">
            {/* HEADER */}
            <div className="row justify-content-between border">
              <div className="col-12 col-md-6">CUSTOMER CARE</div>
              <div className="col-12 col-md-6">
                <div className="row justify-content-between justify-content-md-end">
                  <div className="col-3 col-md-auto">CURRENCY $</div>
                  <div className="col-6 col-md-auto">MY ACCOUNT</div>
                  <div className="col-3 col-md-auto">Search</div>
                </div>
              </div>
            </div>

            {/* LOGO, MENU & CART */}
            <div className="row">
              <div className="col-12 col-md-8 col-lg-3 order-1">logo</div>
              <div className="col-12 col-md-4 col-lg-3 order-2 order-lg-3">
                cart (3rd on lg)
              </div>
              <div className="col-12 col-lg-6 order-3 order-lg-2">
                menu (2nd on lg)
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="jumbotron-fluid">
            <div className="col-12 d-none d-md-flex">slider</div>
          </div>
        </main>
      </Router>
    );
  }
}

export default Main;
