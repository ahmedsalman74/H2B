import React from "react";
import AboutBackground from "../Assets/aboutbg.png";
import AboutBackgroundImage from "../Assets/aboutchat.gif";
import { BsChat } from "react-icons/bs";



const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Dr Bot</p>
        <h1 className="primary-heading">
        Healthcare made convenient, with just a chat
        </h1>
        <p className="primary-text">
        Quick, reliable diagnosis made easy
         
        </p>
        <p className="primary-text">
        Our medical chat bot is your personal assistant for quick and accurate diagnosis.
         With expertise available 24/7, you can get answers to your health questions in seconds.
          Our smart technology empowers you with medical knowledge and makes healthcare more convenient than ever before.
           Say goodbye to long waits and complicated appointments - our chat bot delivers expert diagnosis right to your fingertips.
        </p>
        <div className="about-buttons-container">
         
          <button className="watch-video-button">
            <BsChat /> Try It Now
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
