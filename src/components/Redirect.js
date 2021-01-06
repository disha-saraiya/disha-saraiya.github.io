import React from 'react';
import "../styles/Redirect.css"; 
import Footer from './Footer';

function Redirect(){

    return(
        <body id = "redirect">
        <div id = "redirect_content"> 
            <img src={require("../images/favicon.png")} class="main_img"></img>
            <h2 class = "main__title"> Hello, this portfolio website is deprecated.</h2>
            <h3> To view my new portfolio, please click <a href = "http://disha-saraiya.surge.sh/" target = "__blank"  rel="noopener noreferrer"> here. </a></h3>
            <h3> Thank you! For any questions please feel free to get in touch with me :) </h3>
            <div class="main__links">
            <a
              href="https://www.linkedin.com/in/dishasaraiya/"
              class="fa fa-linkedin"
              target = "__blank"  rel="noopener noreferrer"
            ></a>
            <a href="https://github.com/disha-saraiya"
             class="fa fa-github"
             target = "__blank"  rel="noopener noreferrer"></a>
            <a
              href="mailto: saraiya.disha18@gmail.com"
              class="fa fa-google"
              target = "__blank"  rel="noopener noreferrer"
            ></a>
          </div>
        </div>

        </body>       
    )
}

export default Redirect; 