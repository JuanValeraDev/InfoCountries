import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Col, Row} from "react-bootstrap";
import RectanguloBuscador from "./RectanguloBuscador.jsx";

export const Buscador = () => {

    return (
        <div className={"fondo fondo_buscador"}>

            <div className={"d-flex flex-column"}>
                <h1 className={"titulo_buscador pt-5 mt-lg-5 mb-5"}>Busca como un profesional</h1>
                <Row className={"mb-lg-5  justify-content-center "}>
                    <Col xs={11} sm={7} lg={6} xl={5} className={"z-2 justify-content-lg-start me-xl-5"}>

                        <RectanguloBuscador/>
                    </Col>
                    <Col xs={11} sm={7} lg={6} xl={5} className={"justify-content-lg-end"}>

                        <Rectangulo classNames={"rectangulo_buscador_2 container mt-5 mt-lg-0 ms-xl-5 p-sm-4"}
                                    backgroundColor={"#FFF2D8"}
                                    borderColor={"#113946"}
                                    textColor={"#113946"} padding={{padding: "20px"}}
                        >
                            <h1 className={"m-4"}>Resultados</h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                            Vestibulum
                            venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus
                            tellus,
                            molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit
                            sodales
                            ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus
                            tempus at.
                            Sed
                            egestas venenatis blandit. Vestibulum ornare in erat vel consequat. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                            Vestibulum
                            venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus
                            tellus,
                            molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit
                            sodales
                            ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus
                            tempus at.
                            Sed
                            egestas venenatis blandit. Vestibulum ornare in erat vel consequat.
                        </Rectangulo>

                    </Col>

                </Row>
            </div>
        </div>
    )

}
{/*
                        <Rectangulo classNames={"rectangulo_buscador_1_grande container d-none"}
                                    backgroundColor={"#113946"}
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
                        <Rectangulo classNames={"rectangulo_buscador_1_pequeño container d-none "}
                                    backgroundColor={"#113946"}
                                    borderColor={"#FDF6EA"}
                                    textColor={"#FDF6EA"}
                                    size={{width: "450px", height: "300px"}
                                    }>
                            <Row>
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
                        <Row>
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
                <Rectangulo classNames={"rectangulo_buscador_2 container mt-5"} backgroundColor={"#FFF2D8"}
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
    */
}
