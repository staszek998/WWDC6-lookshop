import React, { Component } from "react";

class FavouriteBrands extends Component {
  render() {
    return (
      <div>
        <div className="row  d-none d-md-block">
          <div className="col text-center ">
            favourite brands (top) separator
          </div>
        </div>
        <div className="container">
          <div className="row  d-none d-md-flex">
            <div className="col  d-none d-lg-block">brand</div>
            <div className="col  d-none d-lg-block">brand</div>
            <div className="col ">brand</div>
            <div className="col ">brand</div>
            <div className="col ">brand</div>
            <div className="col ">brand</div>
            <div className="col ">brand</div>
            <div className="col ">brand</div>
          </div>
        </div>
        <div className="row  d-none d-md-block">
          <div className="col text-center ">
            favourite brands (bottom) separator
          </div>
        </div>
      </div>
    );
  }
}

export default FavouriteBrands;
