import "./App.css";
import Sutuketimi from "./Components/Sutuketimi";
import Makale from "./Components/Makale";
import Sorular from "./Components/Sorular";
import Iletisim from "./Components/Iletisim";
import Giris from "./Components/Giris";
import Bilgiler from "./Components/Bilgiler";
import Altbilgi from "./Components/Altbilgi";
import BitkiVerileriTablosu from "./Components/Bitkiverileri";
import Anasayfa from "./Components/Anasayfa";




function App() {
  return (
    <div className="App">
      
      <Anasayfa />
      <Sutuketimi/>
      <BitkiVerileriTablosu />
      <Bilgiler /> 
      <Makale />
      <Sorular />
      <Iletisim />
      <Altbilgi />
      <Giris />
      
    </div>
  );
}

export default App;
