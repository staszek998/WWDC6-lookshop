import React, { Component } from "react";

import Offer from "./Offer";

import offerBg1 from "../../../images/offers-collage/offer-1.png";
import offerBg2 from "../../../images/offers-collage/offer-2.png";
import offerBg3 from "../../../images/offers-collage/offer-3.png";
import offerBg4 from "../../../images/offers-collage/offer-4.png";

const offer1Content = (
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="display-1">Offer title</h3>
      </div>
    </div>
  </div>
);

const offer2Content = (
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="display-2">Offer title</h3>
      </div>
    </div>
  </div>
);

const offer3Content = (
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="display-3">Offer title</h3>
      </div>
    </div>
  </div>
);

const offer4Content = (
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="display-3">Offer title</h3>
      </div>
    </div>
  </div>
);

class OffersCollage extends Component {
  render() {
    return (
      <div className="container d-none d-md-block offers-collage my-5">
        <div className="row w-100">
          <div className="col p-0 offer-col">
            <Offer
              imgSrc={offerBg1}
              imgAlt="Sample image alt text"
              content={offer1Content}
            />
          </div>
          <div className="col">
            <div className="row h-50">
              <div className="col p-0 offer-col">
                <Offer
                  imgSrc={offerBg2}
                  imgAlt="Sample image alt text"
                  content={offer2Content}
                />
              </div>
            </div>
            <div className="row h-50">
              <div className="col p-0 offer-col">
                <Offer
                  imgSrc={offerBg3}
                  imgAlt="Sample image alt text"
                  content={offer3Content}
                />
              </div>
              <div className="col p-0 offer-col">
                <Offer
                  imgSrc={offerBg4}
                  imgAlt="Sample image alt text"
                  content={offer4Content}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OffersCollage;
