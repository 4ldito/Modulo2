import React, { useRef } from 'react';

import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  // const [value, setValue] = React.useState('');
  const ref = useRef(null);

  function search(e) {
    //onSearch(value);
    onSearch(ref.current.value)
    ref.current.value = '';
  }

  return (
    <div className={styles.searchBarContainer}>
      <input
        ref={ref}
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        className={styles.inputSearch}
        type="text"
        placeholder='Ciudad' />
      <input
        className={styles.btnSearch}
        type="button"
        onClick={search}
        value="Agregar" />
    </div>)
};