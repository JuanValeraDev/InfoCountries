import React from 'react'
import videointro from '../assets/fondointro.mp4'


export const Introduccion = () => {
  return (
    <>
      <div className='main'>
        <video src={videointro} autoPlay loop muted/>
        <div id='titulointrodiv'>
          <p id='titulointro'>Descubre tu próximo
            <text id='titulodestino'> destino</text>
          </p>
          <p id='tituloextra'>Toda la información sobre paises en un mismo lugar.</p>
          <button id='buttonIntro'>EMPEZAR AHORA</button>
        </div>

      </div>
    </>
  )
}
