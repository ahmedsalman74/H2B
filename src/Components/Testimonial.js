import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import Doc1 from "../Assets/doctor 1.png";
import Doc2 from "../Assets/doc2.png";
import Doc3 from "../Assets/doc3.png";
import Doc4 from "../Assets/doc4.png";
const Testimonial = () => {
  const docData = [
    {
      image: Doc1,
      Name: "Dr. Robert Henry",
      spicialty:"Cardiologist",
      
    },
    {
      image: Doc2,
      Name: "Dr. Harry Littleton",
      spicialty:"Neurologist",
      
    },
    {
      image: Doc3,
      Name: "Dr. Sharina Khan",
      spicialty:"Gynologist",
     
    },
    {
      image: Doc4,
      Name: "Dr. Sanjeev Kapoor",
      spicialty:"Child Specialist",
      
    },
    {
      image: Doc2,
      Name: "Dr .Ahmed salman",
      spicialty:"Cardiologist",
      
    },
    {
      image: Doc1,
      Name: "Dr.Khaled Elgamel",
      spicialty:"Cardiologist",
      
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       
        <h1 className="primary-heading">Meet our Doctors</h1>
        <p className="primary-text">
        Well  qualified doctors are ready to serve you
        </p>
      </div>
      {docData.map((data) => (
      <div className="testimonial-section-bottom" key={data.Name}>
        <img src={data.image} alt=""  className="Drcard"/>
        <h2>{data.Name}</h2>
        
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>
        {data.spicialty}
        </p>
        <button className="make-app-button">
            Make Appointment   
          </button>
      </div>
       ))}
    </div>
  );
};

export default Testimonial;
