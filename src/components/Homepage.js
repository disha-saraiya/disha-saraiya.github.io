import React from "react";
import "../styles/Homepage.css";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />

      <div class="onebackground">
        <section class="main" id="home">
          <img src={require("../images/favicon.png")} class="main_img"></img>
          <h1 class="main__title"> Namaste! I'm Disha </h1>
          <div>
            <p class="main__subtitle">
              Computer Science Grad Student | Frontend Developer | Musician |
              Bibliophile
            </p>
          </div>
          <div class="main__links">
            <a
              href="https://www.facebook.com/dracarys09"
              class="fa fa-facebook"
            ></a>
            <a
              href="https://www.linkedin.com/in/dishasaraiya/"
              class="fa fa-linkedin"
            ></a>
            <a href="https://github.com/disha-saraiya" class="fa fa-github"></a>
            <a
              href="mailto: saraiya.disha18@gmail.com"
              class="fa fa-google"
            ></a>
          </div>
        </section>

        <Portfolio />
        <AboutMe />

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
