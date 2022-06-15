import React from 'react';

import styles from '../styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.searchBarContainer}>
      <input className={styles.inputSearch} type="text" placeholder='Ciudad' id="" />
      <input className={styles.btnSearch} type="button" onClick={props.onSearch} value="Agregar" />
    </div>)
};