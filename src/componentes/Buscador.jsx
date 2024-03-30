import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Col, Row} from "react-bootstrap";
import RectanguloBuscador from "./RectanguloBuscador.jsx";

export const Buscador = () => {

    return (
        <div className={"fondo fondo_buscador pb-5 pb-lg-0 main-content"}>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed
                            accumsan.
                            Vestibulum
                            venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus
                            tellus
                            tellus,
                            molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit
                            sodales
                            ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus
                            tempus at.
                            Sed
                            egestas venenatis blandit. Vestibulum ornare in erat vel consequat. Lorem ipsum dolor
                            sit
                            amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                            Vestibulum
                            venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus
                            tellus
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

