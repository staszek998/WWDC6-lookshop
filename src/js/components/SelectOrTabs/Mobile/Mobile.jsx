import React, { Component } from "react";

class Mobile extends Component {
  state = {
    activeTab: "whats-hot"
  };

  render() {
    return (
      <div className="container mobile">
        {/* Dropdown */}
        <div className="row select">
          {/* Toggler button */}
          <div className="col-12">
            <a
              className="btn btn-block text-white text-left d-flex justify-content-between align-items-center"
              data-toggle="collapse"
              href="#select-or-tabs__dropdown-content"
              role="button"
              aria-expanded="false"
              aria-controls="select-or-tabs__dropdown-content"
            >
              <span className="dropdown-toggler__text">WHAT'S HOT?</span>
              <i className="dropdown-toggler__icon fas fa-chevron-down" />
            </a>
          </div>

          {/* Collapsed content */}
          <div className="col-12">
            <div className="collapse" id="select-or-tabs__dropdown-content">
              <a
                href="#"
                className="btn btn-link btn-block text-white text-left"
              >
                DESIGNERS
              </a>
              <a
                href="#"
                className="btn btn-link btn-block text-white text-left"
              >
                FEATURED
              </a>
              <a
                href="#"
                className="btn btn-link btn-block text-white text-left"
              >
                LATEST
              </a>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="row products">
          <div className="col">products</div>
        </div>
      </div>
    );
  }
}

export default Mobile;
