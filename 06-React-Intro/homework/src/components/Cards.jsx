import React from 'react';
import Card from './Card';


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const infoCity = Object.entries(props)[0][1];
  const listCard = infoCity.map((city) => {
    return <Card
      max={city.main.temp_max}
      min={city.main.temp_min}
      name={city.name}
      img = {city.weather[0].icon}
      onClose={() => alert(city.name)}
      key = {city.name}
    ></Card>
  });

  //Object.entries(props).map(([k, v]) => console.log(k, v));
  //const result = props.map(element => {
  //  return "a"
  //});
  
  return <div className='containerCard'>{listCard}</div>
};