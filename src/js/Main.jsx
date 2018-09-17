import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CustomerCare from "./components/Header/CustomerCare/CustomerCare";
import CurrencySelector from "./components/Header/CurrencySelector/CurrencySelector";
import MyAccount from "./components/Header/MyAccount/MyAccount";
import Search from "./components/Header/Search/Search";

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="grid-container">
            <div className="grid-x align-justify">
              <CustomerCare />
              <CurrencySelector />
              <MyAccount />
              <Search />
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default Main;
