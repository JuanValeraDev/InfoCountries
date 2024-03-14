import React from 'react'
import videointro from '../assets/fondointro.mp4'

export const Introduccion = () => {
  return (
    <>
      <div className='introduccion'>
        <video className='videoIntro' autoPlay loop muted>
          < source src={videointro} type='video/mp4' />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className='content'>
          <p id='titulointro'>Descubre tu próximo
            <span id='titulodestino'> destino</span>
          </p>
          <p id='tituloextra'>Toda la información sobre paises en un mismo lugar.</p>
          <button id='buttonIntro'>EMPEZAR AHORA</button>
        </div>
      </div>
    </>
  )
}
