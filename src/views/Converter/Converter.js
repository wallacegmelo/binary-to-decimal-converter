import React from 'react';

import './styles.css';

const Converter = () => {
  const [binary, setBinary] = React.useState();
  const [decimal, setDecimal] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleConverter = event => {
    event.preventDefault();
    setDecimal('');

    if(!binary) {
      setErrorMessage('Preencha o campo');
      return null;
    }

    if (binary.match(/^[0-1]+$/g) === null) {
      setErrorMessage('Digite 0 ou 1');
      return null;
    }

    setErrorMessage('');
    
    const reversedBinary = binary
      .split('')
      .map(Number)
      .reverse();

    const result = reversedBinary.reduce(
      (accumulator, currentbinary, idx) =>
        accumulator + currentbinary * Math.pow(2, idx)
    );

    setDecimal(result);
  }

  return (
    <div id="container">
      <form
        autoComplete="off"
        onSubmit={handleConverter}
      >
        <h1>{decimal}</h1>
        <span>{errorMessage}</span>

        <input
          id="binary-input"
          type="number"
          binary={binary}
          onChange={event => setBinary(event.target.value) && handleConverter}
          placeholder="Apenas digitos na base binária"
        />
        
        <input 
          type="submit" 
          value="Converter" 
        />
      </form>
    </div>
  );
}

export default Converter;