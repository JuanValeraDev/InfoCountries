import React from "react";
import shape_3 from "../assets/shapes/shape_3_modified.png"
import {Col, Row} from "react-bootstrap";
import {Rectangulo} from "./Rectangulo.jsx";
import {Titulo} from "./Titulo.jsx";
import {TextField} from "@mui/material";
import galeria_1 from "../assets/galeria/galeria_1.jpeg"
import galeria_2 from "../assets/galeria/galeria_2.jpeg"
import galeria_3 from "../assets/galeria/galeria_3.jpeg"
import galeria_4 from "../assets/galeria/galeria_4.jpeg"
import galeria_5 from "../assets/galeria/galeria_5.jpeg"
import galeria_6 from "../assets/galeria/galeria_6.jpeg"

export const Galeria = () => {
    return <div className={"fondo fondo_galeria"}>

        <Row>
            <Col lg={6} className={"z-2 align-items-center me-3"}>
                <Titulo texto={"Observa con detalle"} clase={"titulo_galeria mt-lg-5 mt-md-4 ms-5 ps-md-5"}/>
            </Col>
            <Col className={"z-2 align-items-end pt-lg-0 pt-5"}>
                <TextField id="outlined-basic" label="País a buscar" variant="outlined"
                           className={"bg-warning-subtle w-75 mt-5"}/>
            </Col>
        </Row>
        <img src={shape_3} alt={""} className={"fondo_shape_3"}/>

        <Row className={"mt-5 align-content-center row ms-lg-5 me-lg-5 ps-lg-5 pe-lg-5 flex-md-nowrap grid"}>
            <Col className={"z-2"}>
                <Rectangulo classNames={"rectangulo_galeria_1 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                >
                    <img src={galeria_1}/>
                </Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_2 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                > <img src={galeria_2}/>
                </Rectangulo>
            </Col>
            <Col className={"z-2 d-none d-md-block"}>
                <Rectangulo classNames={"rectangulo_galeria_3 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                > <img src={galeria_3}/>
                </Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_4 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                > <img src={galeria_4}/>
                </Rectangulo>

            </Col>
            <Col className={"z-2 d-none d-xl-block"}>
                <Rectangulo classNames={"rectangulo_galeria_5 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                > <img src={galeria_5}/>
                </Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_6 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                > <img src={galeria_6}/>
                </Rectangulo>
            </Col>
        </Row>


    </div>
}