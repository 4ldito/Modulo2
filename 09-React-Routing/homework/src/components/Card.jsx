import React from 'react';
import style from '../styles/Card.module.css';


export default function Card({ max, min, name, img, onClose, id }, key) {
  // acá va tu código 
  return (
    <div className={style.container}>
      <div className={style.card} key={key}>
        <div className={style.containerBtn}>
          <button className={style.btnClose} onClick={() => onClose(id)}>X</button>
        </div>
        <h3>{name}</h3>
        <div className={style.weather}>
          <div>
            <p className={style.min}>Min</p>
            <p className={style.min}>{min}°</p>
          </div>
          <div>
            <p className={style.max}>Max</p>
            <p className={style.max}>{max}°</p>
          </div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Weather" />
        </div>
      </div>
    </div>)
};