import React from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="section__title "> portfolio </h2>
        <button type="button" class="btn btn-dark btn-block">
          my <a href={require("../images/resume.pdf")}>resume</a>
        </button>
        <button type="button" class="btn btn-dark btn-block">
          my <a href="https://github.com/disha-saraiya">github</a>
        </button>
        <div class="row">
          <div class="col col-lg-4 mb-5">
            <div class="portfolio-item">
              <a href="https://covid-stats-application.herokuapp.com/">
                <img
                  class="img-fluid"
                  src={require("../images/covidtracker.PNG")}
                  alt="COVID-19 Stats Tracker"
                ></img>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item">
              <a href="https://recipefinder-2020.herokuapp.com/">
                <img
                  class="img-fluid"
                  src={require("../images/recipeapp.PNG")}
                  alt="RecipeFinder"
                ></img>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item">
              <a href="https://unnati-application.herokuapp.com/">
                <img
                  class="img-fluid"
                  src={require("../images/unnatiapp.PNG")}
                  alt="Unnati"
                ></img>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item">
              <a href="https://github.com/disha-saraiya/visa_classification">
                <img
                  class="img-fluid"
                  src={require("../images/h1bproject.PNG")}
                  alt="H1B Visa Classification"
                ></img>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item">
              <a href="https://github.com/">
                <img
                  class="img-fluid"
                  src={require("../images/comingsoon.gif")}
                  alt="image"
                ></img>
              </a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item">
              <a href="https://github.com/">
                <img
                  class="img-fluid"
                  src={require("../images/comingsoon.gif")}
                  alt="image"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
