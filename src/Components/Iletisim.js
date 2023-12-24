import React from "react";

const Iletisim = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Sorunuz Var Mı?</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Gönder</button>
      </div>
    </div>
  );
};

export default Iletisim;
