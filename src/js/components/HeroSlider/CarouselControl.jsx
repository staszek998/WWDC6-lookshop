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
        <span
          className={`carousel-control-${
            this.props.type === "prev" ? "prev" : "next"
          }-icon`}
          aria-hidden="true"
        />
        <span className="sr-only">
          {this.props.type === "prev" ? "Previous" : "Next"}
        </span>
      </a>
    );
  }
}

export default CarouselControl;
