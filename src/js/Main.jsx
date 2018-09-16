import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./tmp-router-paths/Home";
import About from "./tmp-router-paths/About";
import Contact from "./tmp-router-paths/Contact";

class Main extends Component {

    goBack = () => {
        
    }

  render() {
    return (
      <Router>
        <main>
          <h1>Router paths:</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr />

          <h2>Content rendered by the router:</h2>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </main>
      </Router>
    );
  }
}

export default Main;
