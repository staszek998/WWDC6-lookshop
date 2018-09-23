import React, { Component } from "react";

class FooterBottom extends Component {
  render() {
    return (
      <footer className="row border d-none d-md-flex">
        <div className="col border">
          <div className="container border">
            <div className="row border">
              <div className="col-6 border">links</div>
              <div className="col-6 border text-right">&copy; copyright</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterBottom;
