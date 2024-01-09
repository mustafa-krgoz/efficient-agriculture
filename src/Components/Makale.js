import React from "react";
import PickMeals from "../Assets/pick-meals-image.jpg";
import ChooseMeals from "../Assets/choose-image.jpg";
import DeliveryMeals from "../Assets/delivery-image.jpg";

const Makale = () => {
  const makaleInfoData = [
    {
      image: PickMeals,
      title: "Akıllı Tarım Teknolojileri",
      text: "Dronlar, sensörler ve yapay zeka gibi akıllı tarım teknolojileri, tarımın verimliliğini artırmak için önemli bir rol oynamaktadır. Bu teknolojiler, toprak analizi, su yönetimi ve hastalık kontrolü gibi süreçleri optimize ederek kaynakları daha etkili bir şekilde kullanmamıza olanak tanır.",
    },
    {
      image: ChooseMeals,
      title: "Organik Gübre ve Doğal Zararlı Kontrolü",
      text: "Geleneksel tarım yöntemleri yerine organik gübrelerin kullanımı, toprak kalitesini artırabilir ve uzun vadede verimliliği sürdürülebilir bir şekilde artırabilir. Ayrıca, zararlı organizmalarla mücadelede kimyasal olmayan yöntemlerin tercih edilmesi çevresel dengenin korunmasına katkı sağlar. ",
    },
    {
      image: DeliveryMeals,
      title: "Su Yönetimi",
      text: "Su, tarımın temel bir unsuru olup etkili bir şekilde yönetilmelidir. Drip sulama sistemleri, yağmurlama sistemleri ve su tasarruflu teknolojiler, suyun doğru ve etkili bir şekilde kullanılmasını sağlayarak tarımsal üretimi optimize eder.",
    },
  ];
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Makale</p>
        <h1 className="primary-heading">Öne Çıkan Makaleler</h1>
        <p className="primary-text">
        Verimli tarım yöntemleri, gıda güvenliğini artırmak, çevresel sürdürülebilirliği korumak ve çiftçilere ekonomik fayda sağlamak adına kritik bir öneme sahiptir. 
        Geleceğin tarımı, teknolojik yenilikler, doğal kaynakları etkili kullanma ve çevresel duyarlılık temelinde şekillenmelidir. 
        Bu yaklaşım, hem bugünkü nesillerin hem de gelecek nesillerin ihtiyaçlarını karşılamak adına önemlidir.
        </p>
      </div>
      <div className="work-section-bottom">
        {makaleInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Makale;
