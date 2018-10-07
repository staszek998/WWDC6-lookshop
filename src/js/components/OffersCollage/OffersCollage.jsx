import React, { Component } from "react";

import Offer from "./Offer/Offer";

import offerImage1 from "../../../images/offers-collage/offer-1.png";
import offerImage2 from "../../../images/offers-collage/offer-2.png";
import offerImage3 from "../../../images/offers-collage/offer-3.png";
import offerImage4 from "../../../images/offers-collage/offer-4.png";

class OffersCollage extends Component {
  render() {
    return (
      <div className="container d-none d-md-block offers-collage my-5">
        <div className="row">
          <div className="col p-0 offer-col">
            <Offer
              imgSrc={offerImage1}
              imgAlt="Sample image alt text"
              aHref="#"
            />
          </div>
          <div className="col">
            <div className="row h-50">
              <div className="col p-0 offer-col">
                <Offer
                  imgSrc={offerImage2}
                  imgAlt="Sample image alt text"
                  aHref="#"
                />
              </div>
            </div>
            <div className="row h-50">
              <div className="col p-0 offer-col">
                <Offer
                  imgSrc={offerImage3}
                  imgAlt="Sample image alt text"
                  aHref="#"
                />
              </div>
              <div className="col p-0 offer-col">
                <Offer
                  imgSrc={offerImage4}
                  imgAlt="Sample image alt text"
                  aHref="#"
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
