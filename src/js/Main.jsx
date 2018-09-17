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
              <div className="col-12 col-md-6 border">CUSTOMER CARE</div>
              <div className="col-12 col-md-6 border">
                <div className="row justify-content-between justify-content-md-end border">
                  <div className="col-3 col-md-auto border">CURRENCY $</div>
                  <div className="col-6 col-md-auto border">MY ACCOUNT</div>
                  <div className="col-3 col-md-auto border">Search</div>
                </div>
              </div>
            </div>

            {/* LOGO, MENU & CART */}
            <div className="row border">
              <div className="col-12 col-md-8 col-lg-3 order-1 border">
                logo
              </div>
              <div className="col-12 col-md-4 col-lg-3 order-2 order-lg-3 border">
                cart (3rd on lg)
              </div>
              <div className="col-12 col-lg-6 order-3 order-lg-2 border">
                menu (2nd on lg)
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="row border">
            <div className="col-12 d-none d-md-flex border">slider</div>
          </div>

          {/* NEWSLETTER & SOCIAL MEDIA */}
          <div className="row border">
            <div className="col">
              <div className="container border">
                <div className="row border">
                  <div className="col-12 col-md-6 border">
                    newsletter subscription
                  </div>
                  <div className="col-12 col-md-6 border">
                    social media icons
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default Main;
