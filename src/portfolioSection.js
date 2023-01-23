import React from "react";
import Card from "./Card";
import cabin from "./assets/img/portfolio/cabin.png";
import cake from "./assets/img/portfolio/cake.png";
import circus from "./assets/img/portfolio/circus.png";
import game from "./assets/img/portfolio/game.png";
import safe from "./assets/img/portfolio/safe.png";
import submarine from "./assets/img/portfolio/submarine.png";
const Portfolio = () => (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      {/* <!-- Portfolio Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        Portfolio
      </h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      {/* <!-- Portfolio Grid Items--> */}
      <div className="row justify-content-center">
        {/* <!-- Portfolio Item 1--> */}
        <div className="col-md-6 col-lg-4 mb-5">
          <Card imgSrc={cabin} />
        </div>
        {/* <!-- Portfolio Item 2--> */}
        <div className="col-md-6 col-lg-4 mb-5">
          <Card imgSrc={cake} />
        </div>
        {/* <!-- Portfolio Item 3--> */}
        <div className="col-md-6 col-lg-4 mb-5">
          <Card imgSrc={circus} />
        </div>
        {/* <!-- Portfolio Item 4--> */}
        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <Card imgSrc={game} />
        </div>
        {/* <!-- Portfolio Item 5--> */}
        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          <Card imgSrc={safe} />
        </div>
        {/* <!-- Portfolio Item 6--> */}
        <div className="col-md-6 col-lg-4">
          <Card imgSrc={submarine} />
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
