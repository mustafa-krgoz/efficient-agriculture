
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Navbar from "./Navbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import PickMeals from "../Assets/pick-meals-image.jpg";
import DeliveryMeals from "../Assets/delivery-image.jpg";
import Sulama from "../Assets/damlama-sulama.jpg";
import TarimTeknoloji from "../Assets/yerli-tarim-teknolojisi.jpg";
import Sera from "../Assets/yerli-sera.jpg";


const Anasayfa = () => {
  const makaleInfoData = [
    {
      image: PickMeals,
      title: "Akıllı Tarım Teknolojileri",
      text: "",
    },
    {
      image: DeliveryMeals,
      title: "Su Yönetimi",
      text: "",
    },
    {
      image: Sulama,
      title: "Damlama ile Otomatik Sulama",
      text: "",
    },
    {
      image: TarimTeknoloji,
      title: "Yerli Tarım Teknolojisi",
      text: "",
    },
    {
      image: Sera,
      title: "Sera Görünümü",
      text: "",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const springProps = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + makaleInfoData.length) % makaleInfoData.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % makaleInfoData.length);
  };

  return (
    <div className="main-work-section-wrapper">
      <Navbar />
      <div className="home-text-section">
        <h1 className="baslik">Ana Sayfa</h1>
        <p className="main-page-text">
        Akıllı Sera Sistemi, bitkilerin sağlıklı büyümesini ve su kaynaklarının verimli kullanımını hedefleyen bir çözümdür. Bu sistem, bitkilerin kök bölgelerine entegre edilen nem sensörleri aracılığıyla anlık nem ölçümleri yapar. Elde edilen veriler, toprak ve bitki türüne özel ideal nem seviyelerini belirlemek için kullanılır. 
        Bu sayede, bitkilerin özel ihtiyaçlarına göre optimize edilmiş sulama sağlanarak sağlıklı büyüme desteklenir ve su kaynakları daha verimli bir şekilde kullanılır. Akıllı Sera Sistemi, tarımın sürdürülebilirliğini artırmak amacıyla modern teknolojiyi kullanarak çevre dostu bir yaklaşım sunar.
        </p>
      </div>
      <div className="work-section-bottom">
        <div className="arrow-icons-left">
          <FaArrowLeft onClick={handlePrevClick} />
        </div>

        {makaleInfoData.map((item, index) => (
          <animated.div
            key={item.title}
            className="gorsel"
            style={{
              ...springProps,
              display: index === currentImageIndex ? "block" : "none",
            }}
          >
            <div className="info-boxes-img-container">
              <img src={item.image} alt="" width="100%"/>
            </div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </animated.div>
        ))}

        <div className="arrow-icons-right">
          <FaArrowRight onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};
export default Anasayfa;



