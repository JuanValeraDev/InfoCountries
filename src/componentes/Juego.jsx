import React from "react"
import {Col, Row} from "react-bootstrap";
import shape_4 from "../assets/shapes/shape_4_modified.png"
import {Rectangulo} from "./Rectangulo.jsx";
import {TextField} from "@mui/material";


export const Juego = () => {
    return <div className={"fondo fondo_juego justify-content-center"}>
        <Row>
            <Col xs={12} xl={4} className={"z-2 d-flex align-items-center justify-content-center"}>
                <h1 className={"titulo_juego mt-5 mb-lg-5 pb-5 ms-md-0"}>¡Hora de divertirse!</h1>
            </Col>
            <Col xs={12} xl={8} className={"z-2"}>
                <Rectangulo classNames={" container mb-3 rectangulo_juego"} backgroundColor={"#113946"}
                            borderColor={"#FFF2D8"}
                            textColor={"#113946"}
                            size={{width: "700px", height: "550px"}}>
                    <h1 className={"subtitulo_juego"}>Adivina la capital</h1>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={"bg-warning-subtle w-75 mt-3 mt-md-5"}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <div className={"botonera_juego m-4 mt-md-5 d-flex  align-items-center"}>
                        <button className={" m-4 p-3 ps-5 pe-5 boton_juego"}>Texto</button>
                        <button className={" m-4 p-3 ps-5 pe-5 boton_juego"}>Texto</button>
                        <button className={" m-4 p-3 ps-5 pe-5 boton_juego"}>Texto</button>
                    </div>


                </Rectangulo>
            </Col>
        </Row>
        <img src={shape_4} alt={""} className={"fondo_shape_4"}/>

    </div>
}