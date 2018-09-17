import React, { Component } from "react";
import "./App.css";
import "./vendor/foundation/css/foundation.min.css";
import "./vendor/foundation/js/foundation";
import "./vendor/foundation/js/jquery";
import "./vendor/foundation/js/what-input";

import Main from "./js/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
