import React from 'react';
import SearchBar from './SearchBar';
import logo from '../logoHenry.png'
import style from '../styles/Nav.module.css';

import { Route, Link } from 'react-router-dom';

export default function Nav({ onSearch }) {


    return (
        <div className={style.navApp}>
            <div className={style.logo}>
                <Link to='/'>
                    <img src={logo} alt="Logo Henry" />
                </Link>
                <p>Aplicación del Clima</p>
            </div>
            <Route path='/' exact>
                <SearchBar onSearch={onSearch} />
            </Route>
            <Route path='/about' exact>
                <div className={style.btnAtras}>
                    <Link to="/">
                        <p>Atrás</p>
                    </Link>
                </div>
            </Route>
        </div>
    );
}