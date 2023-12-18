import React from 'react'

import imagenbusqueda from '../assets/busqueda.jpg'
import imagencomparador from '../assets/comparador.jpeg'
import imagenobservar from '../assets/observar.jpg'
import imagenmapamundi from '../assets/mapamundi.jpg'


export const Opciones = () => {
  return (
    <div className={"fondo_solido_variacion"}>
      <p id='opcionesTitulo'>¿Cómo encontrar tu país ideal?</p>
      <div className='conjuntoOpciones'>
        <article className='opcion'>
          <img className='opcionImagen' src={imagenbusqueda}></img>
          <div>
            <p className='opcionTitulo'>Búsqueda avanzada</p>
            <p className='opcionTexto'>Elige qué carácteristicas deseas que tenga tu país de destino y sorpréndete con la lista de oportunidades</p>
          </div>
        </article>

        <article className='opcion'>
          <img className='opcionImagen' src={imagencomparador}></img>
          <div>
            <p className='opcionTitulo'>Comparador de países</p>
            <p className='opcionTexto'>Compara al momento dos o más países para conocer todo lo que los diferencia y también lo que los hace iguales</p>
          </div>
        </article>
      </div>

      <div className='conjuntoOpciones'>
        <article className='opcion'>
          <img className='opcionImagen' src={imagenobservar}></img>
          <div>
            <p className='opcionTitulo'>Observa con detalle</p>
            <p className='opcionTexto'>Porque una imagen vale más que mil palabras, aquí podrás ver imágenes sobre el país que desees</p>
          </div>
        </article>
        <article className='opcion'>
          <img className='opcionImagen' src={imagenmapamundi}></img>
          <div>
            <p className='opcionTitulo'>Juego: ¿Conoces la capital?</p>
            <p className='opcionTexto'>Pon a prueba tu conocimiento sobre capitales de países con nuestro juego interactivo</p>
          </div>
        </article>
      </div>
    </div>
  )
}