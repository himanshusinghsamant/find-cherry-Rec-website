import React from "react";
import './Registration.style.css'
import Footer from "../home_Component/Footer";
import Navbar from "../home_Component/Navbar";
import Img11 from '../images/animated-job.gif'
import Img12 from '../images/bigthumbnail.webp'
import Img13 from '../images/img-recruitment.webp'
import Img14 from '../images/img-jobs-2.jpg'


const Registeration = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="reg-box-1">
          <img src={Img11} alt="" />
        </div>
        <div className="reg-box-2">
          <div className="form-container">
            <div className="name-inp-box">
              <div className="first-name">
                <span>First name*</span>
                <input type="text" />
              </div>
              <div className="last-name">
                <span>Last name*</span>
                <input type="text" />
              </div>
            </div>
            <div className="phone-num-box">
                <span>Phone number*</span>
                <input type="text" />
            </div>
            <div className="email-box">
                <span>Email*</span>
                <input type="text" />
            </div>
            <div className="message-box">
                <span>Your message</span>
                <input type="text" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="main-container-2">
        <img src={Img12} alt="" />
        <img src={Img13} alt="" />
        <img src={Img14} alt="" />
      </div>
      <hr style={{width:'90vw',marginLeft:'5%',color:'yellow'}}/>
      <Footer/>
    </div>
  );
};

export default Registeration;
