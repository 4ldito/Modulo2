import React from 'react';
import Card from './Card';

import style from '../styles/ContainerCards.module.css';


export default function Cards(props) {

  // acá va tu código
  // tip, podés usar un map
  //  const infoCity = Object.entries(props)[0][1];
  const infoCity = props.cities; // es lo mismo q lo de arriba
  const listCard = infoCity.map((city) => {
    return <Card
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      onClose={props.onClose}
      key={city.id}
      id={city.id}
    />
  });

  return <div className={style.containerCard}>{listCard}</div>
};