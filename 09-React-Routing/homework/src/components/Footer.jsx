import React from "react";
import style from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className={style.footer}>
            <Link to="/about" className={style.link}>
                <p className={style.paragraph}>Acerca de este proyecto</p>
            </Link>
        </div>
    );
}