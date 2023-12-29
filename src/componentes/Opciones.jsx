import React from 'react'

import imagenbusqueda from '../assets/busqueda.jpg'
import imagencomparador from '../assets/comparador.jpeg'
import imagenobservar from '../assets/observar.jpg'
import imagenmapamundi from '../assets/mapamundi.jpg'
import { Rectangulo } from './Rectangulo'
import { EstructuraOpcion } from './EstructuraOpcion'



export const Opciones = () => {
  const textBusqueda = "Elige qué carácteristicas deseas que tenga tu país de destino y sorpréndete con la lista de oportunidades"
  const textComparador = "Compara al momento dos o más países para conocer todo lo que los diferencia y también lo que los hace iguales"
  const textDetalle = "Porque una imagen vale más que mil palabras, aquí podrás ver imágenes sobre el país que desees."
  const textJuego = "Pon a prueba tu conocimiento sobre capitales de países con nuestro juego interactivo"
  return (
    <div>
      <h1 className='texto_opciones'>¿Cómo encontrar tu país ideal?</h1>

      <div className='div_estructura_opcion'>
        <EstructuraOpcion urlImage={imagenbusqueda} tittle="Búsqueda avanzada" text={textBusqueda} />
        <EstructuraOpcion urlImage={imagencomparador} tittle="Comparador de países" text={textComparador} />
      </div>

      <div className='div_estructura_opcion'>
        <EstructuraOpcion urlImage={imagenobservar} tittle="Observa con detalle" text={textDetalle} />
        <EstructuraOpcion urlImage={imagenmapamundi} tittle="¿Conoces la capital?" text={textJuego} />
      </div>
    </div>
  )
}