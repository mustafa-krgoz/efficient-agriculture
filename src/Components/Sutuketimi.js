import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Sutuketimi = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
        <p className="primary-subheading">Su Tüketimi</p>
          <h1 className="primary-heading">
            Bitkilerin Verimli Büyüyebilmesi için Sulama ve Su Miktarı
          </h1>         
          <p className="primary-text">
          Toprak nem seviyesi önemlidir; yüzey kuruduğunda sulama yapılmalı, özellikle ilk 2-3 cm kuruduktan sonra sulama uygundur. 
          Bitki türüne göre su ihtiyacı değişir; sebzeler genellikle daha fazla suya ihtiyaç duyar. 
          Hava koşulları etkili; sıcak hava, düşük nem ve rüzgar bitkilerin su kaybetmesini artırabilir, bu durumda sık sulama gerekebilir. Toprak tipi önemlidir; killi topraklar seyrek, kumlu topraklar sık sulamayı gerektirebilir. Sulama zamanı kritiktir; sabah/akşam sulama, suyun etkili emilimini sağlar. İyi drenaj önemli; köklerin oksijen almasını ve aşırı sulamayı önler. 
          Sulama suyu toprak derinliğine ulaşacak şekilde, yüzeyden derine doğru uygulanmalıdır.
          </p>
          <button className="secondary-button">
            Daha Fazla Öğren <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sutuketimi;
