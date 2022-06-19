import React from "react";
import style from '../styles/InfoCity.module.css'

export default function InfoCity({ city }) {
    if (city) {
        return (
            <div className={style.containerInfoCity}>
                {/* {city === undefined ? <div><h1>Ciudad no encontrada</h1></div> : */}
                <div className="">
                    <h2>{city.name}</h2>
                    <div className="">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>
            </div>
        )
    }

}