import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav
      class="navbar fixed-top  navbar-light navbar-expand-lg"
      style={{ background: "lightseagreen" }}
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="">
              HOME <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              PORTFOLIO
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">
              ABOUT ME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
