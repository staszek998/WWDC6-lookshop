import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div className="container cart">
        <div className="row d-none d-md-flex border rounded-0">
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
        <div className="row justify-content-between border rounded-0 bg-light py-1 flex-nowrap">
          <div className="col-auto">
            <a href="#" className="text-dark">
              <i className="fas fa-shopping-bag" />
            </a>
          </div>
          <div className="col-auto text-right summary">0 items | $ 0</div>
        </div>
      </div>
    );
  }
}

export default Cart;
