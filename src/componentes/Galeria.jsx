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
            {/*
            <div className="d-flex flex-column">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-around my-lg-5">

                */}
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
                    {/*

                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around mt-lg-5">
                */}

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
{/*
        <Row>
            <Col lg={6} className={"z-2 align-items-center me-3 mb-4 mb-md-0"}>
                <h1 className={"titulo_galeria mt-lg-5 mt-md-4"}>Observa con detalle</h1>
            </Col>
            <Col className={"z-2 align-items-end"}>
                <TextField id="outlined-basic" label="País a buscar" variant="outlined"
                           className={"bg-warning-subtle w-75 mt-3 mt-md-5"}/>
            </Col>
        </Row> */
}


{/* <Row className={"mt-5 pt-5 align-content-center row ms-lg-5 me-lg-5 ps-lg-5 pe-lg-5 flex-md-nowrap grid"}>
            <Col className={"z-2"}>
                <Rectangulo classNames={"rectangulo_galeria_1 container mb-3"} backgroundColor={"#FFF2D8"}
                    borderColor={"#113946"}
                    textColor={"#113946"}
                    size={{ width: "300px", height: "230px" }}
                >
                    <img src={galeria_1} />
                </Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_2 container mb-3"} backgroundColor={"#FFF2D8"}
                    borderColor={"#113946"}
                    textColor={"#113946"}
                    size={{ width: "300px", height: "230px" }}
                > <img src={galeria_2} />
                </Rectangulo>
            </Col>
            <Col className={"z-2 d-none d-md-block"}>
                <Rectangulo classNames={"rectangulo_galeria_3 container mb-3"} backgroundColor={"#FFF2D8"}
                    borderColor={"#113946"}
                    textColor={"#113946"}
                    size={{ width: "300px", height: "230px" }}
                > <img src={galeria_3} />
                </Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_4 container mb-3"} backgroundColor={"#FFF2D8"}
                    borderColor={"#113946"}
                    textColor={"#113946"}
                    size={{ width: "300px", height: "230px" }}
                > <img src={galeria_4} />
                </Rectangulo>

            </Col>
            <Col className={"z-2 d-none d-xl-block"}>
                <Rectangulo classNames={"rectangulo_galeria_5 container mb-3"} backgroundColor={"#FFF2D8"}
                    borderColor={"#113946"}
                    textColor={"#113946"}
                    size={{ width: "300px", height: "230px" }}
                > <img src={galeria_5} />
                </Rectangulo>

                <Rectangulo classNames={"rectangulo_galeria_6 container mb-3"} backgroundColor={"#FFF2D8"}
                    borderColor={"#113946"}
                    textColor={"#113946"}
                    size={{ width: "300px", height: "230px" }}
                > <img src={galeria_6} />
                </Rectangulo>
            </Col>
        </Row> */
}


