import React, { Component } from "react";

class NewsletterSubscription extends Component {
  render() {
    return (
      <div className="col-12 col-md-6">
        <div className="row form-group flex-nowrap">
          {/* Label */}
          <label for="email" class="col-3 col-form-label">
            Stay updated
          </label>

          {/* Input */}
          <div className="col-9 input-group">
            <input
              name="email"
              id="email"
              type="text"
              className="form-control"
              placeholder="Your e-mail address"
            />

            {/* Plus sign (button) */}
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
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
