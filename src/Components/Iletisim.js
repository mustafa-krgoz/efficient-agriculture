import React, { useState } from "react";
import axios from "axios";

const Iletisim = () => {
  
  const [userQuestion, setUserQuestion] = useState("");

  const handleSoruGonder = async () => {
    try {
      // Kullanıcının sorusu ile bir POST isteği yapın
      await axios.post("/api/soruKaydet", { soru: userQuestion });

      // Başarılı gönderimden sonra giriş alanını temizleyin
      setUserQuestion("");
    } catch (error) {
      console.error("Soru gönderme hatası:", error);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Sorunuz Var Mı?</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder=""
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
        />
        <button className="secondary-button" onClick={handleSoruGonder}>
          Gönder
        </button>
      </div>
    </div>
  );
};

export default Iletisim;

