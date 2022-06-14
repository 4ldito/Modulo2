import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  console.log(props);
  return <div className='searchBar'>
    <input type="text"  placeholder = 'Ciudad' id="" />
    <input type="button" onClick={props.onSearch} value="Agregar" />
  </div>
};