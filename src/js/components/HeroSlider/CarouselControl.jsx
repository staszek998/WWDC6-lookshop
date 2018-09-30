import React, { Component } from "react";

class CarouselControl extends Component {
  render() {
    return (
      <a
        className={`carousel-control-${
          this.props.type === "prev" ? "prev" : "next"
        }`}
        href="#carouselExampleIndicators"
        role="button"
        data-slide={this.props.type === "prev" ? "prev" : "next"}
      >
        <i
          className={`fas fa-chevron-${
            this.props.type === "prev" ? "left" : "right"
          }`}
        />
        <span className="sr-only">
          {this.props.type === "prev" ? "Previous" : "Next"}
        </span>
      </a>
    );
  }
}

export default CarouselControl;
