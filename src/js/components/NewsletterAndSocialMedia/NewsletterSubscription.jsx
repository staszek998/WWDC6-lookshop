import React, { Component } from "react";

class NewsletterSubscription extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 newsletter">
        <div className="row form-group flex-nowrap my-3">
          {/* Label */}
          <label
            htmlFor="email"
            className="col-4 col-form-label d-none d-md-block"
          >
            Stay updated
          </label>

          {/* Input */}
          <div className="col-12 col-md-9 col-lg-8 input-group">
            <input
              name="email"
              id="email"
              type="text"
              className="form-control rounded-0 font-italic h-100 border-0"
              placeholder="Your e-mail address"
            />

            {/* Plus sign (button) */}
            <div className="input-group-append">
              <button className="btn rounded-0 text-white" type="button">
                <i className="fas fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsletterSubscription;
