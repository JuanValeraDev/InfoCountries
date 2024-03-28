import React from 'react'
import {Card} from "react-bootstrap";

export const EstructuraOpcion = (props) => {
    return (
        <Card className={"card_opciones"}>
            <article className="tarjetaOpcion d-flex flex-column flex-md-row justify-content-center">
                <img className="imagenOpcion" src={props.urlImage} alt=""/>
                <div className='tarjetaTexto'>
                    <h2 className={"titulo_opciones"}>{props.tittle}</h2>
                    <p className={"descripcion_opciones"}>{props.text}</p>
                </div>
            </article>
        </Card>
    )
}
