import React from "react";
import "./Login.css";
import Footer from "../home_Component/Footer";
import Navbar from "../home_Component/Navbar";
import Img11 from "../images/animated-job.gif";
import Img12 from "../images/bigthumbnail.webp";
import Img13 from "../images/img-recruitment.webp";
import Img14 from "../images/img-jobs-2.jpg";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-main-container">
        <div className="login-box-1">
          <img src={Img11} alt="" />
        </div>
        <div className="login-box-2">
          <div className="login-form-container">
            <div className="email-box">
              <span>Email*</span>
              <input type="text" />
            </div>

            <div className="pass-box">
              <span>Password*</span>
              <input type="text" />
            </div>

            <span id="forget-link">
              <a href="#">Forget password</a>
            </span>

            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="main-container-2">
        <img src={Img12} alt="" />
        <img src={Img13} alt="" />
        <img src={Img14} alt="" />
      </div>
      <hr style={{ width: "90vw", marginLeft: "5%", color: "yellow" }} />
      <Footer />
    </div>
  );
};

export default Login;
