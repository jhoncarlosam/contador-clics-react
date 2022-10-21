import React from 'react'
import '../css/contador.css'

function Contador({ numClics }) {
  return (
    <>
      <div className='container'>
        {numClics}
      </div>
    </>
  );
}

export default Contador;