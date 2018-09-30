import React, { Component } from "react";

class CarouselItem extends Component {
  render() {
    return (
      <div className={`carousel-item ${this.props.active ? "active" : ""}`}>
        <img
          className="d-block w-100"
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
        />
      </div>
    );
  }
}

export default CarouselItem;
