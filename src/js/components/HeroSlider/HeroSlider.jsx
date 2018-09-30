import React, { Component } from "react";

import CarouselIndicators from "./CarouselIndicators";
import CarouselItem from "./CarouselItem";
import CarouselControl from "./CarouselControl";

import tmpSlide from "../../../images/hero-slider/tmp-slide.png";

class HeroSlider extends Component {
  render() {
    return (
      <div className="row d-none d-md-flex hero-slider">
        <div className="col-12 p-0">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* Carousel items */}
            <div className="carousel-inner">
              <CarouselItem
                active={true}
                imgSrc={tmpSlide}
                imgAlt="Sample image alt text"
              />
              <CarouselItem imgSrc={tmpSlide} imgAlt="Sample image alt text" />
              <CarouselItem imgSrc={tmpSlide} imgAlt="Sample image alt text" />
            </div>

            <CarouselIndicators />

            {/* Carousel controls */}
            <CarouselControl type="prev" />
            <CarouselControl type="next" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSlider;
