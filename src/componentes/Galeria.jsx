import React from "react";
import shape_3 from "../assets/shapes/shape_3_modified.png"
import {Col, Row} from "react-bootstrap";
import {Rectangulo} from "./Rectangulo.jsx";
import {Titulo} from "./Titulo.jsx";
import {TextField} from "@mui/material";

export const Galeria = () => {
    return <div className={"fondo fondo_galeria"}>

        <Row>

            <Titulo texto={"Observa con detalle"} clase={"titulo_galeria"}/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </Row>
        <img src={shape_3} alt={""} className={"fondo_shape_3"}/>

        <Row className={"mt-5 align-content-center row ms-lg-5 me-lg-5 ps-lg-5 pe-lg-5 flex-md-nowrap grid"}>
            <Col className={"z-2"}>
                <Rectangulo classNames={"rectangulo_galeria_1 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                ></Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_2 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                ></Rectangulo>
            </Col>
            <Col className={"z-2 d-none d-md-block"}>
                <Rectangulo classNames={"rectangulo_galeria_3 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                ></Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_4 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                ></Rectangulo>

            </Col>
            <Col className={"z-2 d-none d-xl-block"}>
                <Rectangulo classNames={"rectangulo_galeria_5 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                ></Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_6 container mb-3"} backgroundColor={"#FFF2D8"}
                            borderColor={"#113946"}
                            textColor={"#113946"}
                            size={{width: "300px", height: "230px"}}
                ></Rectangulo>
            </Col>
        </Row>


    </div>
}