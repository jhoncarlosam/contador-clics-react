import React from 'react';
import '../css/button.css'

function Button({ text, isButtonClic, handleClic}) {
  return (
    <>
      <button
        className={ isButtonClic ? 'button-clic' : 'button-restart' }
        onClick={ handleClic }>
        {text}
      </button>
    </>
  );
}

export default Button;