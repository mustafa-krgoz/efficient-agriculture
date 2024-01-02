import React, { useState } from 'react';

const BitkiVerileriTablosu = () => {
  const [bitkiVerileri, setBitkiVerileri] = useState([
    { bitkiIsmi: 'Domates', ph: '6.5', sicaklik: '24', nemOrani: '65', havaKaliteOrani: 'doygun', veriTarih: '2023-12-19'},
    { bitkiIsmi: 'Salatalık', ph: '6.4', sicaklik: '28', nemOrani: '75', havaKaliteOrani: 'doygun', veriTarih: '2023-12-20'},
    { bitkiIsmi: 'Biber', ph: '6.4', sicaklik: '27', nemOrani: '70', havaKaliteOrani: 'doygun', veriTarih: '2023-12-21'},
    { bitkiIsmi: 'Patlıcan', ph: '6.0', sicaklik: '28', nemOrani: '65', havaKaliteOrani: 'doygun', veriTarih: '2023-12-22'},
    { bitkiIsmi: 'Kavun', ph: '6.4', sicaklik: '27', nemOrani: '75', havaKaliteOrani: 'doygun', veriTarih: '2023-12-23'},
    { bitkiIsmi: 'Muz', ph: '6.0', sicaklik: '28', nemOrani: '70', havaKaliteOrani: 'doygun', veriTarih: '2023-12-23'},
    { bitkiIsmi: 'Çilek', ph: '6.0', sicaklik: '20', nemOrani: '85', havaKaliteOrani: 'doygun', veriTarih: '2023-12-23'},                                              
  ]);

  const BitkiGrubu = ({ grupAdi, bitkiVerileri }) => {
    return (
      <div>
        <p className="group-heading">{grupAdi}</p>
        <table>
          <thead>
            <tr>
              <th>Bitki İsmi</th>
              <th>Ph</th>
              <th>Sıcaklık</th>
              <th>Nem Oranı</th>
              <th>Hava Kalite Oranı</th>
              <th>Veri Tarih</th>
            </tr>
          </thead>
          <tbody>
            {bitkiVerileri.map((bitki) => (
              <tr key={bitki.id}>
                <td>{bitki.bitkiIsmi}</td>
                <td>{bitki.ph}</td>
                <td>{bitki.sicaklik}</td>
                <td>{bitki.nemOrani}</td>
                <td>{bitki.havaKaliteOrani}</td>
                <td>{bitki.veriTarih}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bitki-verileri-tablosu">
      <BitkiGrubu grupAdi="Sebze Grubu" bitkiVerileri={bitkiVerileri.slice(0, 3)} />
      <BitkiGrubu grupAdi="Meyve Grubu" bitkiVerileri={bitkiVerileri.slice(4)} />
    </div>
  );
};

export default BitkiVerileriTablosu;

