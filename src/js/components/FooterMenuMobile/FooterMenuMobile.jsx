import React, { Component } from "react";

class FooterMenuMobile extends Component {
  render() {
    return (
      <footer className="row border d-md-none">
        <div className="container border">
          <div className="row border">
            <div className="col-6 border">
              <button
                data-toggle="collapse"
                type="button"
                data-target="#footer-links"
                aria-expanded="false"
                aria-controls="footer-links"
                onClick={() => {
                  setTimeout(() => {
                    window.scroll({
                      top: 500,
                      behavior: "smooth"
                    });
                  }, 500);
                }}
              >
                button
              </button>
            </div>
            <div className="col-6 border">&copy; copyright</div>
            <div className="col-12 border collapse" id="footer-links">
              footer links
              <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterMenuMobile;
