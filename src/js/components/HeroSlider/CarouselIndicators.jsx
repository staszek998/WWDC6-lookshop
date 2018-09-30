import React, { Component } from "react";

class CarouselIndicators extends Component {
  render() {
    return (
      <ol className="carousel-indicators m-0">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="mx-2 active"
        />
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          className="mx-2"
        />
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          className="mx-2"
        />
      </ol>
    );
  }
}

export default CarouselIndicators;
