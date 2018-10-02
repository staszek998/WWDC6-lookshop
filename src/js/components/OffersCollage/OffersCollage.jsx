import React, { Component } from "react";

import Offer from "./Offer";

class OffersCollage extends Component {
  render() {
    return (
      <div className="container d-none d-md-block">
        <div className="row">
          <div className="col">
            <Offer />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <Offer />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Offer />
              </div>
              <div className="col">
                <Offer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OffersCollage;
