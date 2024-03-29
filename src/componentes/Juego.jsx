import React from "react"
import {Col, Row} from "react-bootstrap";
import shape_4 from "../assets/shapes/shape_4_modified.png"
import {Rectangulo} from "./Rectangulo.jsx";
import {TextField} from "@mui/material";


export const Juego = () => {

    return (
        <div className={"fondo fondo_juego justify-content-center "}>
            <div
                className={"d-flex flex-column flex-lg-row justify-content-xl-around align-items-center "}>
                <h1 className={"titulo_juego"}>¡Hora de divertirse!</h1>

                <Rectangulo classNames={"z-2 mx-5 my-5"} backgroundColor={"#113946"}
                            borderColor={"#FFF2D8"}
                            textColor={"#113946"}>
                    <h1 className={"subtitulo_juego my-3 mx-5"}>Adivina la capital</h1>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className={"bg-warning-subtle w-75 mt-3 mt-md-5"}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <div className={"botonera_juego m-4 mt-md-5 d-flex flex-column flex-xl-row align-items-center"}>
                        <button className={" m-4 p-3 ps-5 pe-5 boton_juego"}>Texto</button>
                        <button className={" m-4 p-3 ps-5 pe-5 boton_juego"}>Texto</button>
                        <button className={" m-4 p-3 ps-5 pe-5 boton_juego"}>Texto</button>
                    </div>
                </Rectangulo>
            </div>
        </div>
    )
}
