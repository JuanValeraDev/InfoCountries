import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Fondo} from "./Fondo.jsx";
import fondo_buscador from "../assets/fondo_buscador 16.32.40.jpeg"

export const Buscador = () => {
    return (<div className={"buscador"}>
        <Fondo imagen={fondo_buscador}/>
    </div>)
}
