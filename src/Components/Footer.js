import React from "react";

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/Logowithe.png";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Qualtiy</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Appointment</span>
                    <span>Doctors</span>
                    
                </div>
                <div className="footer-section-columns">
                    <span>+20
                        1142805134
                    </span>
                    <span>H2B@gmaail.com</span>
                    <span>Salman@gmail.com</span>
                    <span>contact@gmail.com.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
