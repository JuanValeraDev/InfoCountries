import React from "react";
import {Rectangulo} from "./Rectangulo.jsx";
import galeria_1 from "../assets/galeria/galeria_1.jpeg"
import galeria_2 from "../assets/galeria/galeria_2.jpeg"
import galeria_3 from "../assets/galeria/galeria_3.jpeg"
import galeria_4 from "../assets/galeria/galeria_4.jpeg"
import galeria_5 from "../assets/galeria/galeria_5.jpeg"
import galeria_6 from "../assets/galeria/galeria_6.jpeg"
import {Col, Row} from "react-bootstrap";

export const Galeria = () => {

    return <div className={"fondo_galeria"}>
        <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-5">
                <h1 className={"titulo_galeria mt-5"}>Observa con detalle</h1>
                <Col xs={7} md={5} xl={3}>
                    <input className="form-control mt-5 buscador-galeria" placeholder={"País a buscar"} type="text"/>
                </Col>

            </div>
            <Row className={"d-flex align-items-center justify-content-center justify-content-lg-around"}>

                <Col xs={9} md={7} lg={5} xl={3} className={"z-2 align-items-center p-3"}>
                    <Rectangulo
                        classNames={"my-5"}
                        backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        height={{height: "400px"}}
                    >
                        <img src={galeria_1}/>
                    </Rectangulo>
                    <Rectangulo
                        classNames={"my-5"}
                        backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        height={{height: "400px"}}>
                        <img src={galeria_2}/>
                    </Rectangulo>
                </Col>
                <Col xs={9} md={7} lg={5} xl={3} className={"z-2 p-3"}>
                    <Rectangulo
                        classNames={"my-5"}
                        backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        height={{height: "400px"}}
                    > <img src={galeria_3}/>
                    </Rectangulo>
                    <Rectangulo
                        classNames={"my-5"}
                        backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        height={{height: "400px"}}
                    > <img src={galeria_4}/>
                    </Rectangulo>
                </Col>
                <Col xs={9} md={7} lg={5} xl={3} className={"z-2 p-3 d-lg-none d-xl-block"}>
                    <Rectangulo
                        classNames={"my-5"}
                        backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        height={{height: "400px"}}
                    > <img src={galeria_5}/>
                    </Rectangulo>

                    <Rectangulo
                        classNames={"my-5"}
                        backgroundColor={"#FFF2D8"}
                        borderColor={"#113946"}
                        textColor={"#113946"}
                        height={{height: "400px"}}
                    > <img src={galeria_6}/>
                    </Rectangulo>
                </Col>
            </Row>
        </div>
    </div>
}


