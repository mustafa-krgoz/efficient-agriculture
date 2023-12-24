import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Sorular = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">SSS</p>
        <h1 className="primary-heading">Sıkça Sorulan Sorular</h1>
        <p className="primary-text">
        Sulama yönetimindeki geleneksel sınırlamalara alternatif olarak geliştirilen 
        Akıllı Sera Sistemi, bitkilerin nem seviyelerini nasıl etkili bir şekilde yönetir ve tarım verimliliğini nasıl artırabilir?
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Admin Profili"  width="100px" height="100px"/>
        <p>
          
        Akıllı Sera Sistemi, sensörler ve otomasyon kullanarak bitkilerin ihtiyaçlarına göre su yönetimini optimize eder. Bu, su tasarrufu, optimal büyüme koşulları, verimlilik artışı ve maliyet azaltımına katkı sağlar. Çiftçilere uzaktan izleme ve kontrol imkanı sunarak çevresel sürdürülebilirliği artırabilir. 
        Ancak, uygulanabilirlik ve maliyet gibi zorluklar da göz önünde bulundurulmalıdır.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Mustafa Karagöz</h2>
      </div>
    </div>
  );
};

export default Sorular;
