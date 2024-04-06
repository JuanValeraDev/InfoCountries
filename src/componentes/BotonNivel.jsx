import React from "react"

export const BotonNivel = (props) => {
    return (
        <div className="align-items-center text-center p-2">
            <button className="boton_seleccion_nivel">{props.name}</button>
        </div>
    )
}