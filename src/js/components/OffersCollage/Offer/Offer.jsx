import React, { Component } from "react";

class Offer extends Component {
  render() {
    return (
      <div className="offer w-100 h-100">
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
          className="offer-image"
        />
      </div>
    );
  }
}

export default Offer;
