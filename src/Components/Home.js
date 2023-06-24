import React from "react";
import chatIcon from"../Assets/chatanimatied icon.gif";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">

        </div>
        <div className="home-text-section">
        <h1 className="primary-heading-b">
            We care 
          </h1>
          <h1 className="primary-heading">
             about your health
          </h1>
          <p className="primary-text">
            Good health is the state of mental, physical and social well being
            and it does not just mean absence of diseases.
          </p>
          <button className="secondary-button">
            Make Appointment  <FiArrowRight className="arrow" />{" "}
          </button>
          <button className="chat-button">
          <img src={chatIcon} alt="" />
          </button>
          <div className="DR-font">Dr Bot</div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
