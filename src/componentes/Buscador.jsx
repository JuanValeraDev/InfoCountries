import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Fondo} from "./Fondo.jsx";
import fondo_buscador from "../assets/fondo_buscador 16.32.40.jpeg"

export const Buscador = () => {
    return (<div>
        <Fondo imagen={fondo_buscador}>
        <Rectangulo backgroundColor={1} textColor={1} borderColor={1}/>
        </Fondo>
    </div>)
}
