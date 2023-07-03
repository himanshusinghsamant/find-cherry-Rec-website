import React from "react";
import "../home_Component/Main.style.css";
import Video from "../videos/vdo.mp4";
import Img1 from "../images/online-recruitment.jpg";
import Img2 from "../images/online-rec-img2.jpg";
import Img3 from "../images/online-rec-img3.jpg";
import Img4 from "../images/online-rec-img5.jpg";
import Footer from "./Footer";


const Main = () => {
  return (
    <div>
      <div className="para-container">
        <h4>What is online recruitment</h4>
        <h1>
          The key features and benefits of <br /> the online recruitment
          solution
        </h1>
        <h2>
          emphasizing its efficiency for hiring manager and HR professionals
        </h2>
      </div>
      <div className="video-section">
        <div className="video-box">
          <video controls src={Video} type="video.mp4"></video>
        </div>
      </div>
      <div className="info-container-1">
        <div className="box-1">
          <h2>what is online recruitment?</h2>
          <p id="p1">
            Online recruitment (also known as E-recruitment or internet
            recruiting) allows businesses to use various internet-based
            solutions – for example, online advertising, job listings, social
            media and company websites to source and hire the best candidates.
          </p>
          <p id="p2">
            The prolific use of the internet for recruiting has made it easier
            to source candidates and conduct interviews as well as process the
            relevant paperwork required to hire and train candidates. Online
            recruitment is a way to provide businesses with an efficient and
            cheaper way to fill positions.
          </p>
        </div>
        <div className="box-2">
          <img src={Img1} alt="" />
        </div>
      </div>
      <div className="info-container-2">
        <div
          className="box-1"
          style={{ paddingRight: "20px" }}
        >
          <h2>Advantages of online recruitment</h2>
          <p id="p1">
            What are the advantages of using the internet for recruitment? There
            are several advantages of online recruitment, all aimed at a more
            efficient hiring process and providing better candidate relationship
            management.
          </p>
          <p id="p2">
            The online recruitment system evaluates initial selections according
            to the criteria specified and they will alert you when an
            applicant’s resume meets them. Online recruitment is very different
            from a conventional newspaper magazine or trade journal job listing.
            With online recruitment, your adverts are placed in front of the
            right people 24 hours a day.
          </p>
        </div>
        <div className="box-2" style={{ paddingLeft: "20px" }}>
          <img src={Img2} alt="" />
        </div>
      </div>
      <div className="info-container-3">
        <div className="box-1">
          <h2>Cost effective recruiting method</h2>
          <p id="p1">
            Recruitment costs can add up very quickly. This is because
            recruiting costs not only take into account the actual expense of
            sourcing and hiring candidates, but also onboarding, training and
            retention counts.
          </p>
          <p id="p2">
            Every employee needs to get the proper training and onboarding
            within a set timeframe to be proficient at their job. If there’s a
            high turnover rate within a short amount of time, it means the
            employee will have left the job without the company recouping their
            recruitment costs.
          </p>
        </div>
        <div className="box-2">
          <img src={Img3} alt="" />
        </div>
      </div>
      <div className="info-container-4">
        <div
          className="box-1"
          style={{ paddingRight: "20px" }}
        >
          <h2>Recruiting on the internet improves communication</h2>
          <p id="p1">
            It’s important for your company’s brand and reputation to have
            positive interactions with applicants, irrespective of whether they
            get through the first phase or are shortlisted for an interview.
            Therefore, you should attempt to communicate with every single
            applicant who has applied for an open vacancy
          </p>
          <p id="p2">
            How you communicate to candidates is very important because, even if
            they’re not suitable for your company, they may leave reviews on
            sites, like GlassDoor, about how you handled the recruitment
            process.
          </p>
        </div>
        <div className="box-2" style={{ paddingLeft: "20px" }}>
          <img src={Img4} alt="" />
        </div>
      </div>
      <hr  style={{width:'90vw',marginLeft:'5%',color:'yellow'}} />
      <Footer/>
    </div>
  );
};

export default Main;
