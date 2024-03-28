import React from 'react'

import imagenbusqueda from '../assets/busqueda.jpg'
import imagencomparador from '../assets/comparador.jpeg'
import imagenobservar from '../assets/observar.jpg'
import imagenmapamundi from '../assets/mapamundi.jpg'
import { EstructuraOpcion } from './EstructuraOpcion'



export const Opciones = () => {
  const textBusqueda = "Elige qué carácteristicas deseas que tenga tu país de destino y sorpréndete con la lista de oportunidades"
  const textComparador = "Compara al momento dos o más países para conocer todo lo que los diferencia y también lo que los hace iguales"
  const textDetalle = "Porque una imagen vale más que mil palabras, aquí podrás ver imágenes sobre el país que desees."
  const textJuego = "Pon a prueba tu conocimiento sobre capitales de países con nuestro juego interactivo"
  return (
      <div className='d-flex flex-column align-items-center mx-3 componente_opciones'>
        <h1 className='texto_opciones'>¿Cómo encontrar tu país ideal?</h1>
        <div className='d-flex flex-column flex-xl-row align-items-center'>
          <EstructuraOpcion urlImage={imagenbusqueda} tittle="Búsqueda avanzada" text={textBusqueda} />
          <EstructuraOpcion urlImage={imagencomparador} tittle="Comparador de países" text={textComparador} />
        </div>

        <div className='d-flex flex-column flex-xl-row align-items-center'>
          <EstructuraOpcion urlImage={imagenobservar} tittle="Observa con detalle" text={textDetalle} />
          <EstructuraOpcion urlImage={imagenmapamundi} tittle="¿Conoces el país?" text={textJuego} />
        </div>
      </div>
  )
}
