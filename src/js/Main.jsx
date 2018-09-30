import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import LogoMenuAndCart from "./components/LogoMenuAndCart/LogoMenuAndCart";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import NewsletterAndSocialMedia from "./components/NewsletterAndSocialMedia/NewsletterAndSocialMedia";
import OffersCollage from "./components/OffersCollage/OffersCollage";
import SelectOrTabs from "./components/SelectOrTabs/SelectOrTabs";
import Clearance50Off from "./components/Clearance50Off/Clearance50Off";
import FavouriteBrands from "./components/FavouriteBrands/FavouriteBrands";
import AboutLookshop from "./components/AboutLookshop/AboutLookshop";
import AcceptedPayments from "./components/AcceptedPayments/AcceptedPayments";
import FooterTop from "./components/FooterTop/FooterTop";
import FooterBottom from "./components/FooterBottom/FooterBottom";
import FooterMenuMobile from "./components/FooterMenuMobile/FooterMenuMobile";

class Main extends Component {
  render() {
    return (
      <Router>
        <main className="d-flex flex-column">
          <Header />
          <LogoMenuAndCart />
          {/* <HeroSlider />
          <NewsletterAndSocialMedia />
          <OffersCollage />
          <SelectOrTabs />
          <Clearance50Off />
          <FavouriteBrands />
          <AboutLookshop />
          <AcceptedPayments />
          <FooterTop />
          <FooterBottom />
          <FooterMenuMobile /> */}
        </main>
      </Router>
    );
  }
}

export default Main;
