import React from 'react';
import SearchBar from './SearchBar';
import logo from '../logoHenry.png'
import style from '../styles/Nav.module.css';

export default function Nav({ onSearch }) {


    return (
        <div className={style.navApp}>
            <div className={style.logo}>
                <img src={logo} alt="Logo Henry" />
                <p>Aplicación del Clima</p>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}