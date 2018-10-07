import React, { Component } from "react";

class CollapseToggler extends Component {
  state = {
    collapsed: true
  };

  buttonClickHandler = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div className="col-12 text-center py-3">
        <button
          className="btn border-0 rounded-0 bg-dark text-white"
          type="button"
          data-toggle="collapse"
          data-target="#hiddenProducts"
          aria-expanded="false"
          aria-controls="hiddenProducts"
          onClick={this.buttonClickHandler}
        >
          {this.state.collapsed ? "LOAD MORE" : "SHOW LESS"}
        </button>
      </div>
    );
  }
}

export default CollapseToggler;
