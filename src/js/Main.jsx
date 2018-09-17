import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./tmp-router-paths/Home";
import About from "./tmp-router-paths/About";
import Contact from "./tmp-router-paths/Contact";

class Main extends Component {
  goBack = () => {};

  render() {
    return (
      <Router>
        <main>Hello World!</main>
      </Router>
    );
  }
}

export default Main;
