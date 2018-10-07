import React, { Component } from "react";

class SelectOrTabs extends Component {
  render() {
    return (
      <div>
        <div className="row d-md-none">
          <div className="container">
            <div className="row">
              <div className="col">SELECT on mobile</div>
            </div>
          </div>
        </div>

        <div className="row d-none d-md-flex justify-content-between">
          <div className="col">TABS on medium and above</div>
          <div className="col">arrows &lt; &gt;</div>
        </div>

        <div className="row">
          <div className="col">offers slider</div>
        </div>
      </div>
    );
  }
}

export default SelectOrTabs;
