import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col">col</div>
            <div className="col">col</div>
            <div className="col">col</div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
