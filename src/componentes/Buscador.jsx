import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Fondo} from "./Fondo.jsx";
import fondo_buscador from "../assets/fondo_buscador 16.32.40.jpeg"
import shape_1 from "../assets/shapes/shape_1.png"
import shape_2 from "../assets/shapes/shape_2.png"
import {Titulo} from "./Titulo.jsx";
import {RowBuscador} from "./RowBuscador.jsx";
import {Col, Row} from "react-bootstrap";

export const Buscador = () => {

    return (<div className={"buscador"}>
        <Fondo imagen={fondo_buscador} shapes={{shape_1: shape_1, shape_2: shape_2}}
               class_imagen_fondo={"imagen_fondo_buscador"}
               class_shape_1={"fondo_shape_1"}
               class_shape_2={"fondo_shape_2"}>
            <Rectangulo classNames={"rectangulo_buscador_1 container"} backgroundColor={"#113946"}
                        borderColor={"#FDF6EA"}
                        textColor={"#FDF6EA"}
                        size={{width: "800px", height: "200px"}
                        }>
                <Row>
                    <Col className={"col_row_buscador"}>
                        <RowBuscador texto={"Nombre:"}/>
                        <RowBuscador texto={"Moneda:"}/>
                        <RowBuscador texto={"Idioma:"}/>
                    </Col>
                    <Col className={"col_row_buscador"}>
                        <RowBuscador texto={"Región:"}/>
                        <RowBuscador texto={"Subregión:"}/>
                        <RowBuscador texto={"Código:"}/>
                    </Col>
                </Row>
            </Rectangulo>
            <Titulo texto={"Busca como un profesional"}/>
            <Rectangulo classNames={"rectangulo_buscador_2 container"} backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        size={{width: "850px", height: "370px"}}>
                <h1>Resultados</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan. Vestibulum
                venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus tellus,
                molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit sodales
                ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus tempus at. Sed
                egestas venenatis blandit. Vestibulum ornare in erat vel consequat.
            </Rectangulo>
        </Fondo>
    </div>)
}
