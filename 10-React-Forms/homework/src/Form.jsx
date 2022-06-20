import React, { useState } from 'react';


export function validate(input) {
  const errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required'
  } else if (!/(?=.*[0-9])/.test(input.password) || input.password.length < 8) {
    errors.password = 'Password is invalid'
  }

  return errors;
};

export default function Form() {

  const [input, setInput] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({});

  const handleInputChange = ({ target }) => {

    setInput((prevValue) => {
      const newInput = { ...prevValue, [target.name]: target.value }
      const errors = validate(newInput);
      setErrors(errors);
      return newInput;
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div onSubmit={handleOnSubmit} className="">
      <form action="">
        <div className="userContainer">
          <label htmlFor="username">Username:</label>
          <input className={errors.username && 'danger'} value={input.username} onChange={handleInputChange} type="text" name="username" id="username" />
          {errors.username && (
            <p className="danger">{errors.username}</p>
          )}
        </div>

        <div className="passContainer">
          <label htmlFor="password">Password:</label>
          <input className={errors.password && 'danger'} value={input.password} onChange={handleInputChange} type="password" name="password" id="password" />
          {errors.password && (
            <p className="danger">{errors.password}</p>
          )}
        </div>
        <div className="btnContainer">
          <button type="submit">Log In</button>
        </div>
      </form>

    </div>
  )
}
