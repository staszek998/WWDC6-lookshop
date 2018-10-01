import React, { Component } from "react";

class CarouselItem extends Component {
  render() {
    return (
      <div className={`carousel-item ${this.props.active ? "active" : ""}`}>
        <div className="row main-row h-100">
          <img
            className="d-block w-100 bg-image"
            src={this.props.imgSrc}
            alt={this.props.imgAlt}
          />
          <div className="container">
            <div className="row h-100">{this.props.slideContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselItem;
