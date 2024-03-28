import React from 'react'
import { useNavigate } from 'react-router-dom'

export const EstructuraOpcion = (props) => {
  const navigate = useNavigate()
  const ruta = () => {
    navigate(props.ruta);
  };
  return (
    <article onClick={ruta} className="tarjetaOpcion d-flex flex-column flex-md-row justify-content-center">
      <img className="imagenOpcion" src={props.urlImage} alt="" />
      <div className='tarjetaTexto'>
        <h2>{props.tittle}</h2>
        <p>{props.text}</p>
      </div>
    </article>
  )
}
