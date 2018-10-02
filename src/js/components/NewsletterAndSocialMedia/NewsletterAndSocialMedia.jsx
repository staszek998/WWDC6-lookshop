import React, { Component } from "react";

import NewsletterSubscription from "./NewsletterSubscription";
import SocialMediaIcons from "./SocialMediaIcons";

class NewsletterAndSocialMedia extends Component {
  render() {
    return (
      <div className="row newsletter-and-social-media text-secondary">
        <div className="container">
          <div className="row">
            <NewsletterSubscription />
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsletterAndSocialMedia;
