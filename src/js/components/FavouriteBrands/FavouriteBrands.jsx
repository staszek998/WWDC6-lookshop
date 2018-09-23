import React, { Component } from "react";

class FavouriteBrands extends Component {
  render() {
    return (
      <div>
        <div className="row border d-none d-md-block">
          <div className="col text-center border">
            favourite brands (top) separator
          </div>
        </div>
        <div className="container">
          <div className="row border d-none d-md-flex">
            <div className="col border d-none d-lg-block">brand</div>
            <div className="col border d-none d-lg-block">brand</div>
            <div className="col border">brand</div>
            <div className="col border">brand</div>
            <div className="col border">brand</div>
            <div className="col border">brand</div>
            <div className="col border">brand</div>
            <div className="col border">brand</div>
          </div>
        </div>
        <div className="row border d-none d-md-block">
          <div className="col text-center border">
            favourite brands (bottom) separator
          </div>
        </div>
      </div>
    );
  }
}

export default FavouriteBrands;
