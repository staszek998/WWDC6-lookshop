import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="grid-container">grid container</div>
        </main>
      </Router>
    );
  }
}

export default Main;
