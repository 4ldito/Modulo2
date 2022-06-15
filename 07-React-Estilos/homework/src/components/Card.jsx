import React from 'react';
import style from '../styles/Card.module.css';


export default function Card({ max, min, name, img, onClose }, key) {
  // acá va tu código 
  return (
    <div className={style.container}>
      <div className={style.card} key={key}>
        <div className={style.containerBtn}>
          <button className={style.btnClose} onClick={onClose}>X</button>
        </div>
        <h3>{name}</h3>
        <div className={style.weather}>
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
      </div>
    </div>)
};