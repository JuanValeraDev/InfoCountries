import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import shape_1 from "../assets/shapes/shape_1_modified.png"
import shape_2 from "../assets/shapes/shape_2_modified.png"
import {RowBuscador} from "./RowBuscador.jsx";
import {Col, Row} from "react-bootstrap";

export const Buscador = () => {

    return (
        <div className={"fondo fondo_buscador"}>
            <Row className={"mb-lg-5"}>
                <Col className={"z-2 "}>
                    <Rectangulo classNames={"rectangulo_buscador_1_grande container"} backgroundColor={"#113946"}
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
                    <Rectangulo classNames={"rectangulo_buscador_1_pequeño container"} backgroundColor={"#113946"}
                                borderColor={"#FDF6EA"}
                                textColor={"#FDF6EA"}
                                size={{width: "450px", height: "300px"}
                                }>
                        <Row >
                            <Col className={"col_row_buscador"}>
                                <RowBuscador classNames={"mb-1"} texto={"Nombre:"}/>
                                <RowBuscador classNames={"mb-1"} texto={"Moneda:"}/>
                                <RowBuscador classNames={"mb-1"} texto={"Idioma:"}/>
                                <RowBuscador classNames={"mb-1"} texto={"Región:"}/>
                                <RowBuscador classNames={"mb-1"} texto={"Subregión:"}/>
                                <RowBuscador classNames={"mb-1"} texto={"Código:"}/>
                            </Col>
                        </Row>
                    </Rectangulo>

                </Col>
                <Col className={"z-1"}>
                    <h1 className={"titulo_buscador z-2 ms-md-4 mt-sm-3 mb-md-3"}>Busca como un profesional</h1>
                    <img src={shape_1} alt={""} className={"fondo_shape_1"}/>
                </Col>
            </Row>
            <Row>
                <img src={shape_2} alt={""} className={"fondo_shape_2"}/>
                <Rectangulo classNames={"rectangulo_buscador_2 container"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "850px", height: "370px"}}>
                    <h1>Resultados</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                    Vestibulum
                    venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus tellus,
                    molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit sodales
                    ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus tempus at.
                    Sed
                    egestas venenatis blandit. Vestibulum ornare in erat vel consequat.
                </Rectangulo>

            </Row>

        </div>)
}
