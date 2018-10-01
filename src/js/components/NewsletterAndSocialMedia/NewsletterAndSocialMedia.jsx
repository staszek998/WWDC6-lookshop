import React, { Component } from "react";

import NewsletterSubscription from "./NewsletterSubscription";

class NewsletterAndSocialMedia extends Component {
  render() {
    return (
      <div className="row newsletter-and-social-media text-secondary">
        <div className="container">
          <div className="row">
            <NewsletterSubscription />
            <div className="col-12 col-md-6">social media icons</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsletterAndSocialMedia;
