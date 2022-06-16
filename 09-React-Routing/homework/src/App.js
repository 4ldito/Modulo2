import React, { useState } from 'react';
// import Card from './components/Card.jsx';
import Nav from "./components/Nav";
import Cards from './components/Cards.jsx';
//import data from './data.js';
//import data, { Cairns } from './data.js';
import style from './styles/ContainerCards.module.css';

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const API_KEY = '4ae2636d8dfbdc3044bede63951a019b'
  const [cities, setCities] = useState([]);

  function removeCity(cityId) {
    setCities(oldCities => {
      return oldCities.filter((city) => {
        return city.id !== cityId
      })
    });
  }

  function addCity(city) {
    setCities(oldCities => [city, ...oldCities]);
  }

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          cities.find(c => c.id === city.id) ? alert('Ciudad actualmente ya renderizada.') : addCity(city);
        } else {
          alert(`Ciudad no encontrada`);
        }
      });
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <div className={style.containerCard}>
        <Cards
          cities={cities} onClose={removeCity}
        />
      </div>
    </div>
  );
}

export default App;
