import React, { Component } from "react";

class FooterTop extends Component {
  render() {
    return (
      <div className="row border d-none d-md-flex">
        <div className="col border">
          <div className="container border">
            <div className="row border">
              <div className="col-6 col-lg-8 border">
                <div className="row border">
                  <div className="col-6 col-lg-3 border">customer service</div>
                  <div className="col-6 col-lg-3 border">information</div>
                  <div className="col-6 col-lg-3 border">campaigns</div>
                  <div className="col-6 col-lg-3 border">stores</div>
                </div>
              </div>
              <div className="col-6 col-lg-4 border">
                <div className="row border">
                  <div className="col-6 border">social media links</div>
                  <div className="col-6 border">100% secured badge</div>
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
