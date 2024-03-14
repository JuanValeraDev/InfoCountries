import React from 'react'

export const EstructuraOpcion = (props) => {
  return (
    <article className="tarjetaOpcion d-flex flex-column flex-md-row justify-content-center">
      <img className="imagenOpcion" src={props.urlImage} alt="" />
      <div className='tarjetaTexto'>
        <h2>{props.tittle}</h2>
        <p>{props.text}</p>
      </div>
    </article>
  )
}
