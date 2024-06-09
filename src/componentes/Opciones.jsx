import React from 'react'

import {EstructuraOpcion} from './EstructuraOpcion'
import card_options_1 from '../assets/images/card_options_1.jpeg'
import card_options_2 from '../assets/images/card_options_2.jpeg'
import card_options_3 from '../assets/images/card_options_3.jpeg'
import card_options_4 from '../assets/images/card_options_4.jpeg'


export const Opciones = () => {
    const textBusqueda = "Elige qué características deseas que tenga tu país de destino y sorpréndete con la lista de oportunidades"
    const textComparador = "Compara al momento dos países para conocer todo lo que los diferencia y también lo que los hace iguales"
    const textDetalle = "Porque una imagen vale más que mil palabras, aquí podrás ver imágenes sobre el país que desees."
    const textJuego = "Pon a prueba tu conocimiento sobre capitales y banderas de países con nuestro juego interactivo"
    return (
        <div className='d-flex flex-column align-items-center mx-3 componente_opciones pb-5'>
            <h1 className='texto_opciones'>¿Cómo encontrar tu país ideal?</h1>
            <div className='d-flex flex-column flex-xl-row align-items-center'>
                <EstructuraOpcion ruta="busquedaAvanzada" urlImage={card_options_1} tittle="Buscador"
                                  text={textBusqueda}/>
                <EstructuraOpcion ruta="comparador" urlImage={card_options_2} tittle="Comparador"
                                  text={textComparador}/>
            </div>

            <div className='d-flex flex-column flex-xl-row align-items-center'>
                <EstructuraOpcion ruta="galeria" urlImage={card_options_3} tittle="Galería"
                                  text={textDetalle}/>
                <EstructuraOpcion ruta="minijuego" urlImage={card_options_4} tittle="Minijuego"
                                  text={textJuego}/>
            </div>
        </div>
    )
}
