import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="grid-container">
            <div className="grid-x">
              <div className="cell small-6">cell</div>
              <div className="cell small-6">cell</div>
            </div>
            <div className="grid-x">
              <div className="cell small-12">cell</div>
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default Main;
