import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Bilgiler = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Bilgi</p>
        <h1 className="primary-heading">
          Akıllı Seranın Önemi?
        </h1>
        <p className="primary-text">
        Bitkilerin sağlıklı büyümesi, tarımın temel unsurlarından biridir ve bu süreçte doğru sulama, kritik bir faktördür. 
        Ancak, geleneksel sulama yöntemleri genellikle standart ve genel geçer olup, bitkilerin özel ihtiyaçlarına yeterince odaklanamamaktadır. 
        Bu noktada, Akıllı Sera Sistemi devreye girerek bitkilerin kök bölgelerine entegre edilen nem sensörleri aracılığıyla 
        anlık nem ölçümleri yapmakta ve toprak ile bitki türüne özel ideal nem seviyelerini belirlemektedir. 
        </p>
        <p className="primary-text">
        Bu proje, bitkilerin daha sağlıklı büyümesini sağlamak ve su kaynaklarını daha verimli kullanmak amacıyla geliştirilmiştir.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Daha Fazla Öğren</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Video İzle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bilgiler;
