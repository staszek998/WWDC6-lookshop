import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import CustomerCare from "./components/Header/CustomerCare/CustomerCare";
// import CurrencySelector from "./components/Header/CurrencySelector/CurrencySelector";
// import MyAccount from "./components/Header/MyAccount/MyAccount";
// import Search from "./components/Header/Search/Search";

class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <div className="container">
            {/* HEADER */}
            <div className="row justify-content-between border">
              <div className="col-12 col-md-6 border">CUSTOMER CARE</div>
              <div className="col-12 col-md-6 border">
                <div className="row justify-content-between justify-content-md-end border">
                  <div className="col-3 col-md-auto border">CURRENCY $</div>
                  <div className="col-6 col-md-auto border">MY ACCOUNT</div>
                  <div className="col-3 col-md-auto border">Search</div>
                </div>
              </div>
            </div>

            {/* LOGO, MENU & CART */}
            <div className="row border">
              <div className="col-12 col-md-8 col-lg-3 order-1 border">
                logo
              </div>
              <div className="col-12 col-md-4 col-lg-3 order-2 order-lg-3 border">
                cart (3rd on lg)
              </div>
              <div className="col-12 col-lg-6 order-3 order-lg-2 border">
                menu (2nd on lg)
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="row border">
            <div className="col-12 d-none d-md-block border">main slider</div>
          </div>

          {/* NEWSLETTER & SOCIAL MEDIA */}
          <div className="row border">
            <div className="col">
              <div className="container border">
                <div className="row border">
                  <div className="col-12 col-md-6 border">
                    newsletter subscription
                  </div>
                  <div className="col-12 col-md-6 border">
                    social media icons
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CURRENT OFFER COLLAGE */}
          <div className="container border">
            <div className="row border">
              <div className="col d-none d-md-block border">offer</div>
              <div className="col d-none d-md-block border">
                <div className="row border">
                  <div className="col border">offer</div>
                </div>
                <div className="row border">
                  <div className="col border">offer</div>
                  <div className="col border">offer</div>
                </div>
              </div>
            </div>
          </div>

          {/* SELECT / TABS */}
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

          {/* CLEARANCE */}
          <div className="container border">
            <div className="row border">
              <div className="col border d-flex justify-content-center">
                clearance 50% off
              </div>
            </div>
            <div className="row border">
              <div className="col-6 col-md-4 col-lg-3 border">
                col-6, col-md-4, col-lg-3
              </div>
              <div className="col-6 col-md-4 col-lg-3 border">
                col-6, col-md-4, col-lg-3
              </div>
              <div className="d-none d-md-block col-4 col-lg-3 border">
                d-none, d-md-block, col-md-4, col-lg-3
              </div>
              <div className="d-none d-lg-block col-3 border">
                d-none, d-lg-block, col-lg-3
              </div>
            </div>
          </div>

          {/* FAVOURITE BRANDS */}
          <div className="row border d-none d-md-block">
            <div className="col text-center border">
              favourite brands (top) separator
            </div>
          </div>
          <div className="container">
            <div className="row border d-none d-md-flex">
              <div className="col border d-none d-lg-block">brand</div>
              <div className="col border d-none d-lg-block">brand</div>
              <div className="col border">brand</div>
              <div className="col border">brand</div>
              <div className="col border">brand</div>
              <div className="col border">brand</div>
              <div className="col border">brand</div>
              <div className="col border">brand</div>
            </div>
          </div>
          <div className="row border d-none d-md-block">
            <div className="col text-center border">
              favourite brands (bottom) separator
            </div>
          </div>

          {/* ABOUT LOOKSHOP */}
          <div className="container border d-none d-md-block">
            <div className="row border">
              <div className="col border text-center">about lookshop</div>
            </div>
            <div className="row border">
              <div className="col border text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia ipsum, porro distinctio quas pariatur quibusdam quos
                quis eveniet, deleniti voluptates quae necessitatibus tempora?
                Repudiandae provident, voluptas ducimus quia molestiae beatae.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                labore error reiciendis? Fugit possimus perspiciatis optio!
                Corrupti, velit odit delectus molestiae nesciunt pariatur
                mollitia. Nisi aliquid ullam perferendis modi necessitatibus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                nihil saepe ratione facere, hic esse nulla eligendi illum fugit
                aspernatur voluptates incidunt adipisci, ullam nesciunt at
                cupiditate, cum quisquam a.
              </div>
            </div>
          </div>

          {/* ACCEPTED PAYMENTS */}
          <div className="row border d-none d-md-flex justify-content-center">
            <div className="col-auto border">accepted payments</div>
          </div>

          {/* FOOTER TOP (TABLET & DESKTOP) */}
          <div className="row border d-none d-md-flex">
            <div className="col border">
              <div className="container border">
                <div className="row border">
                  <div className="col-6 col-lg-8 border">
                    <div className="row border">
                      <div className="col-6 col-lg-3 border">
                        customer service
                      </div>
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
        </main>
      </Router>
    );
  }
}

export default Main;
