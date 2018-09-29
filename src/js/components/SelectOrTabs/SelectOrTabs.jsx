import React, { Component } from "react";

class SelectOrTabs extends Component {
  render() {
    return (
      <div>
        <div className="row d-md-none">
          <div className="container border">
            <div className="row border">
              <div className="col border">SELECT on mobile</div>
            </div>
          </div>
        </div>

        <div className="row border d-none d-md-flex justify-content-between">
          <div className="col border">TABS on medium and above</div>
          <div className="col border">arrows &lt; &gt;</div>
        </div>

        <div className="row border">
          <div className="col border">offers slider</div>
        </div>
      </div>
    );
  }
}

export default SelectOrTabs;
