import React, { Component } from "react";

class CarouselIndicators extends Component {
  render() {
    return (
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
    );
  }
}

export default CarouselIndicators;
