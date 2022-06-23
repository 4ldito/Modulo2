import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';

const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [type, setType] = useState('Contador');
  const myRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (active && type === 'Contador') {
      interval = setInterval(() => {
        setSeconds(segundos => segundos + 1);
      }, 1000);
    } else if (!active && seconds !== 0 && type === 'Contador') {

      clearInterval(interval);
    } else if (active && seconds === 0 && type === 'Cuenta Regresiva') {
      reset();
      clearInterval(interval);
      alert('Finalizo la cuenta regresiva =)')
    } else if (active && type === 'Cuenta Regresiva') {
      interval = setInterval(() => {
        setSeconds(segundos => segundos - 1);
      }, 1000);

    }

    return () => clearInterval(interval);
  }, [active, seconds, type]);


  function toggle() {
    setActive(!active);
  }

  function reset() {
    myRef.current.value = ''
    setSeconds(0);
    setActive(false);
  }

  function cambioTipo() {
    if (type === 'Contador') setType('Cuenta Regresiva')
    if (type === 'Cuenta Regresiva') setType('Contador')
  }

  function agregaSegundos() {
    let ref = myRef.current.value
    setSeconds(ref)
  }

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${active ? 'active' : 'inactive'}`} onClick={toggle}>
          {active ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
        {type}
      </button>
      {type === 'Cuenta Regresiva' && <input onChange={agregaSegundos} ref={myRef} type="number" placeholder="Ingresa Segundos" autoComplete="off" />}
    </div>
  );
};

export default Timer; 