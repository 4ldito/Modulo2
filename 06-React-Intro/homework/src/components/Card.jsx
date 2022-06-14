import React from 'react';

/**
 * max={Cairns.main.temp_max}
   min={Cairns.main.temp_min}
   name={Cairns.name}
   img={Cairns.weather[0].icon}
   onClose={() => alert(Cairns.name)}
 */

export default function Card({ max, min, name, img, onClose}, key) {
  // acá va tu código
  return <div key={key}>
              <h3>{name}</h3>
              <div className="weather">
                <p className="min">{min}</p>
                <p className="max">{max}</p>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Weather" />
                <button onClick={onClose}>X</button>
              </div>
        </div>
};