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
      </Router>
    );
  }
}

export default Main;
