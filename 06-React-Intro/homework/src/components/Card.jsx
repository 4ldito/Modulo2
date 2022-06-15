import React from 'react';

/**
   max={Cairns.main.temp_max}
   min={Cairns.main.temp_min}
   name={Cairns.name}
   img={Cairns.weather[0].icon}
   onClose={() => alert(Cairns.name)}
 */

export default function Card({ max, min, name, img, onClose }, key) {
  // acá va tu código 
  return (
    <div key={key}>
      <button onClick={onClose}>X</button>
      <h3>{name}</h3>
      <div className="weather">
        <div className="textWeather">
          <p>Min</p>
          <p className="min">{min}</p>
        </div>
        <div className="textWeather">
          <p>Max</p>
          <p className="max">{max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Weather" />
      </div>
    </div>)
};