import React from 'react'
import videointro from '../assets/video/fondointro.mp4'
import { Col } from "react-bootstrap";

export const Introduccion = ({ opcionesRef }) => {

  const handleScroll = () => {
    if (opcionesRef && opcionesRef.current) {
      window.scrollTo({
        top: opcionesRef.current.offsetTop,
        behavior: 'smooth'  //
      });
    }
  }

  return (
    <>
      <div className='introduccion'>
        <video className='videoIntro' autoPlay loop muted>
          < source src={videointro} type='video/mp4' />
          Tu navegador no soporta el elemento de video.
        </video>

        <div className='content '>
          <Col xs={11} md={9} xxl={5}>
            <div className='fondo_transparente'>
              <p className='titulo_introduccion'>Descubre tu próximo <span className='destacado'>destino</span></p>
              <p className='subtitulo_introduccion'>Toda la información sobre países en un mismo lugar.</p>
              <button className='boton_introduccion' onClick={handleScroll}>EMPEZAR AHORA</button>
            </div>
          </Col>
        </div>
      </div>
    </>
  )
}
