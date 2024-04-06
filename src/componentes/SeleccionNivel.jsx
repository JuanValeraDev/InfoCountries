import React, { useState } from "react"
import { BotonNivel } from "./BotonNivel"
import { FaQuestionCircle } from 'react-icons/fa';

export const SeleccionNivel = () => {
    const [showPopup, setShowPopup] = useState(false);


    return (
        <div className="fondo fondo_juego d-flex flex-column align-items-center justify-content-center">
            <h1 className="titulo_juego">¡Hora de divertirse!</h1>
            <h3 className="descripcion_juego">¡Pon a prueba tus conocimientos sobre los distintos países!</h3>
            <FaQuestionCircle className="icono_interrogacion" onClick={() => setShowPopup(true)} />
            {showPopup && (
                <div className="popup">
                    <p>Texto de ayuda o descripción sobre el juego...</p>
                    <button onClick={() => setShowPopup(false)}>Cerrar</button>
                </div>
            )}
            <BotonNivel name="Adivina la capital"/>
            <BotonNivel name="Adivina la bandera" />
        </div>
    )
}