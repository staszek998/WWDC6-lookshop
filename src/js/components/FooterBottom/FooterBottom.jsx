import React, { Component } from "react";

class FooterBottom extends Component {
  render() {
    return (
      <footer className="row  d-none d-md-flex">
        <div className="col ">
          <div className="container ">
            <div className="row ">
              <div className="col-6 ">links</div>
              <div className="col-6  text-right">&copy; copyright</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterBottom;
