import React from "react";
import fondo_buscador from "../assets/fondo_observador 16.32.40.jpeg"
import shape_3 from "../assets/shapes/shape_3.png"
import shape_4 from "../assets/shapes/shape_4.png"
import {Fondo} from "./Fondo.jsx";
import {Col, Row} from "react-bootstrap";
import {Rectangulo} from "./Rectangulo.jsx";
import {Titulo} from "./Titulo.jsx";

export const Galeria = () => {
    return <>
        <Fondo imagen={fondo_buscador} shapes={{shape_1: shape_3}}
               class_imagen_fondo={"imagen_fondo_galeria"}
               class_shape_1={"fondo_shape_3"}
        >

                <Titulo texto={"Observa con detalle"} clase={"titulo_galeria"} />
                    <Rectangulo classNames={"rectangulo_galeria_1 container"} backgroundColor={"#FFF2D8"}
                                borderColor={"#113946"}
                                textColor={"#113946"}
                                size={{width: "350px", height: "250px"}}
                    ></Rectangulo>

                    <Rectangulo classNames={"rectangulo_galeria_2 container"} backgroundColor={"#FFF2D8"}
                                borderColor={"#113946"}
                                textColor={"#113946"}
                                size={{width: "350px", height: "250px"}}
                    ></Rectangulo>

                    <Rectangulo classNames={"rectangulo_galeria_3 container"} backgroundColor={"#FFF2D8"}
                                borderColor={"#113946"}
                                textColor={"#113946"}
                                size={{width: "350px", height: "250px"}}
                    ></Rectangulo>

                    <Rectangulo classNames={"rectangulo_galeria_4 container"} backgroundColor={"#FFF2D8"}
                                borderColor={"#113946"}
                                textColor={"#113946"}
                                size={{width: "350px", height: "250px"}}
                    ></Rectangulo>

                    <Rectangulo classNames={"rectangulo_galeria_5 container"} backgroundColor={"#FFF2D8"}
                                borderColor={"#113946"}
                                textColor={"#113946"}
                                size={{width: "350px", height: "250px"}}
                    ></Rectangulo>

                    <Rectangulo classNames={"rectangulo_galeria_6 container"} backgroundColor={"#FFF2D8"}
                                borderColor={"#113946"}
                                textColor={"#113946"}
                                size={{width: "350px", height: "250px"}}
                    ></Rectangulo>


        </Fondo>
    </>
}