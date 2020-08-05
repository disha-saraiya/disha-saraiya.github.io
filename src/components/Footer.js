import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="copyright py-4 text-center text-black">
        <div class="container">Copyright © Disha Saraiya 2020</div>
      </div>{" "}
      <div class="footer-links">
        <a
          href="https://www.linkedin.com/in/dishasaraiya/"
          class="fa fa-linkedin"
        ></a>
        <a href="https://github.com/disha-saraiya" class="fa fa-github"></a>
        <a href="mailto: saraiya.disha18@gmail.com" class="fa fa-google"></a>
      </div>
    </footer>
  );
}

export default Footer;
