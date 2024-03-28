// Introduccion.jsx
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
            <div className='fondo_transparente'>
              <p className='titulo_introduccion'>Descubre tu próximo <span className='destacado'>destino</span></p>
              <p className='subtitulo_introduccion'>Toda la información sobre paises en un mismo lugar.</p>
              <button className='boton_introduccion'>EMPEZAR AHORA</button>
            </div>
          </div>
        </div>
      </>
  )
}
