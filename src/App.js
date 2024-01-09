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
      <div id="anasayfa">
        <Anasayfa />
      </div>
      <div id="su-tuketimi">
        <Sutuketimi />
      </div>
      <div id="bitki-verileri">
        <BitkiVerileriTablosu />
      </div>
      <div id="bilgiler">
        <Bilgiler />
      </div>
      <div id="makale">
        <Makale />
      </div>
      <div id="sss">
        <Sorular />
      </div>
      <div id="iletisim">
        <Iletisim />
      </div>
      <div id="hakkimizda">
        <Altbilgi />
      </div>
      <div id="giris">
        <Giris />
      </div>
    </div>
  );
}


export default App;
