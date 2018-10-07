import React, { Component } from "react";

class Mobile extends Component {
  render() {
    return (
      <div className="container mobile">
        {/* Dropdown */}
        <div className="row select">
          {/* Toggler button */}
          <div className="col-12">
            <a
              className="btn btn-block text-white"
              data-toggle="collapse"
              href="#select-or-tabs__dropdown-content"
              role="button"
              aria-expanded="false"
              aria-controls="select-or-tabs__dropdown-content"
            >
              Link with href
            </a>
          </div>

          {/* Collapsed content */}
          <div className="col-12">
            <div className="collapse" id="select-or-tabs__dropdown-content">
              {/* here goes my list */}
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
