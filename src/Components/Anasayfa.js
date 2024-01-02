import React, { useState } from "react";
import PickMeals from "../Assets/pick-meals-image.jpg";
import ChooseMeals from "../Assets/choose-image.jpg";
import DeliveryMeals from "../Assets/delivery-image.jpg";
import Navbar from "./Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Ok ikonlarını ekleyin

const Anasayfa = () => {
  const makaleInfoData = [
    {
      image: PickMeals,
      title: "Akıllı Tarım Teknolojileri",
      text: "",
    },
    {
      image: ChooseMeals,
      title: "Organik Gübre ve Doğal Zararlı Kontrolü",
      text: " ",
    },
    {
      image: DeliveryMeals,
      title: "Su Yönetimi",
      text: "",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + makaleInfoData.length) % makaleInfoData.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % makaleInfoData.length);
  };

  return (
    <div className="work-section-wrapper">
      <Navbar />

      <div className="home-text-section">
        <h1 className="baslik">Ana Sayfa</h1>
        <p className="primary-text"></p>
      </div>
      <div className="work-section-bottom">
        <div className="arrow-icons-left">
          <FaArrowLeft onClick={handlePrevClick} />
        </div>

        <div className="gorsel" key={makaleInfoData[currentImageIndex].title}>
          <div className="info-boxes-img-container">
            <img src={makaleInfoData[currentImageIndex].image} alt="" />
          </div>
          <h2>{makaleInfoData[currentImageIndex].title}</h2>
          <p>{makaleInfoData[currentImageIndex].text}</p>
        </div>

        <div className="arrow-icons-right">
          <FaArrowRight onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;



