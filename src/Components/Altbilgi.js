import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Altbilgi = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container"> 
          <img src={Logo} alt=""/>
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
          <span>Yardım</span>
          <span>Paylaş</span>
          <span>Görüşler</span>
          <span>İş</span>
        </div>
        <div className="footer-section-columns">
          <span>544-444-44</span>
          <span>akilli-tarim@gmail.com</span>
          <span>suhayat@hotmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Şartlar & Koşullar</span>
          <span>Gizlilik Politikası</span>
        </div>
      </div>
    </div>
  );
};

export default Altbilgi;
