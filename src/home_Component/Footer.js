import React from 'react'
import './Main.style.css'
import Img5 from "../images/rec-gif-4.gif";
import Img6 from "../images/playstore-google-img.png";
import Img7 from "../images/applestore-img.jpg";
import Img8 from "../images/insta.jpg";
import Img9 from "../images/facebook.png";
import Img10 from "../images/twitter.jpg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="box-1">
            <img src={Img5} alt="" />
          </div>
          <div className="box-2">
            <h2>Let's have a chat</h2>
            <p>
              Click here to read our blog about how SMS is the chosen method of
              communication with applicants.
            </p>
            <div className="store-icons">
              <img src={Img6} alt="" />
              <img src={Img7} alt="" />
            </div>
            <div className="social-icons">
              <img src={Img9} alt="" />
              <img src={Img8} alt="" />
              <img src={Img10} alt="" />
            </div>
          </div>
        
        </div>
        <div className="footer-sec-2">
            <h3>© 2023 Onboard IQ / All rights reserved</h3>
          </div>
      </footer>
    </div>
  )
}

export default Footer
