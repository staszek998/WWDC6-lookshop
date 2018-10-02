import React, { Component } from "react";

class SocialMediaIcons extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 social-media-icons">
        <div className="row justify-content-center justify-content-md-end align-items-center mb-3 h-100">
          <span className="text-secondary mr-3">Find us here</span>

          <button className="btn rounded-0 facebook">
            <i className="fab fa-facebook-f" />
          </button>

          <button className="btn rounded-0 twitter">
            <i className="fab fa-twitter" />
          </button>

          <button className="btn rounded-0 pinterest">
            <i className="fab fa-pinterest" />
          </button>
        </div>
      </div>
    );
  }
}

export default SocialMediaIcons;
