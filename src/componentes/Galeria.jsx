import React from "react";
import shape_3 from "../assets/shapes/shape_3.png"
import shape_4 from "../assets/shapes/shape_4.png"
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


    </div>
}