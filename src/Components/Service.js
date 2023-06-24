import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import chatIcon from"../Assets/chatanimatied icon.gif";
import emergancy from"../Assets/4096-heal.gif";
import takeappointment from"../Assets/take-appointment.gif";
import communicaate from"../Assets/communicaate.gif";

const Work = () => {
  const workInfoData = [
    {
      image: chatIcon,
      title: "chatBot 24/7",
      
    },
    {
      image: emergancy,
      title: "Emergancy",
      
    },
    {
      image: takeappointment,
      title: "Online Appointment",
     
    },
    {
      image: communicaate,
      title: "communication Environment",
      
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">

        <h1 className="primary-heading">Our Medical Services</h1>
        <p className="primary-text">
          We are dedicated to serve you
          best medical services
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt=""  className="cardimg"/>
            </div>
            <h2>{data.title}</h2>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
