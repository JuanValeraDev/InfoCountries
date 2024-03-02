import React from "react"
import {Col, Row} from "react-bootstrap";
import {Rectangulo} from "./Rectangulo.jsx";
import shape_7 from "../assets/shapes/shape_7_modified.png";
import {TextField} from "@mui/material";


export const About = () => {
    return (
        <div className={"fondo fondo_about"}>

            <h1 className={"titulo_about pt-5 mt-lg-5"}>Sobre nosotros</h1>
            <Row className={"d-flex "}>
                <Col className={"z-2"} >

                    <Rectangulo classNames={"rectangulo_about_1 container mt-5"} backgroundColor={"#113946"}
                                borderColor={"#BCA37F"}
                                textColor={"#FFF2D8"}
                                size={{width: "375px", height: "370px"}}>
                        <h1>Quiénes somos</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                        Vestibulum
                        venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus
                        tellus,
                        molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit sodales
                    </Rectangulo>
                    <h2>Contacto</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                        Vestibulum
                       </p>
                </Col>
                <Col className={"z-2"}>

                    <Rectangulo classNames={"rectangulo_about_2 container mt-5"} backgroundColor={"#113946"}
                                borderColor={"#FFF2D8"}
                                textColor={"#FFF2D8"}
                                size={{width: "375px", height: "670px"}}>
                        <h1>FAQs</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan.
                        Vestibulum
                        venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus
                        tellus,
                        molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit sodales
                    </Rectangulo>
                </Col>

            </Row>
            <img src={shape_7} alt={""} className={"fondo_shape_7"}/>

        </div>
    )
}