import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="row d-none d-md-flex">
          <div className="dropdown w-100">
            <button
              className="btn btn-block dropdown-toggle bg-transparent text-left"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Your cart
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <i className="fas fa-shopping-bag" />
          </div>
          <div className="col text-right summary">0 items | $ 0</div>
        </div>
      </div>
    );
  }
}

export default Cart;
