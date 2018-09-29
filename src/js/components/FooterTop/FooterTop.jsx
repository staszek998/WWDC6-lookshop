import React, { Component } from "react";

class FooterTop extends Component {
  render() {
    return (
      <div className="row  d-none d-md-flex">
        <div className="col ">
          <div className="container ">
            <div className="row ">
              <div className="col-6 col-lg-8 ">
                <div className="row ">
                  <div className="col-6 col-lg-3 ">customer service</div>
                  <div className="col-6 col-lg-3 ">information</div>
                  <div className="col-6 col-lg-3 ">campaigns</div>
                  <div className="col-6 col-lg-3 ">stores</div>
                </div>
              </div>
              <div className="col-6 col-lg-4 ">
                <div className="row ">
                  <div className="col-6 ">social media links</div>
                  <div className="col-6 ">100% secured badge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterTop;
