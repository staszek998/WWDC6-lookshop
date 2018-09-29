import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="row d-none d-md-flex">
          <div className="col">Dropdown</div>
        </div>
        <div className="row">
          <div className="col">Cart icon</div>
          <div className="col">Sum of cart items and price</div>
        </div>
      </div>
    );
  }
}

export default Cart;
