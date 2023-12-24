import "./App.css";
import Anasayfa from "./Components/Anasayfa";
import Makale from "./Components/Makale";
import Sorular from "./Components/Sorular";
import Iletisim from "./Components/Iletisim";
import Giris from "./Components/Giris";
import Bilgiler from "./Components/Bilgiler";
import Altbilgi from "./Components/Altbilgi";



function App() {
  return (
    <div className="App">
      
      <Anasayfa />
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
