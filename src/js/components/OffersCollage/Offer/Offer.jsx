import React, { Component } from "react";

class Offer extends Component {
  render() {
    return (
      <div className="offer w-100 h-100">
        <a href={this.props.aHref} target="_blank" className="offer-link">
          <img
            src={this.props.imgSrc}
            alt={this.props.imgAlt}
            className="offer-image"
          />
        </a>
      </div>
    );
  }
}

export default Offer;
