import React from "react";
import { Row, Col } from "react-bootstrap";

const RectanguloBuscador = () => {
    const filas1 = ["Nombre:", "Moneda:", "Idioma:"];
    const filas2 = ["Región:", "Subreg:", "Código:"];

    return (
        <div style={{
            backgroundColor: "#113946",
            borderColor: "#FDF6EA",
            color: "#FDF6EA",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            border: "thick solid"
        }}>
            <Row className="d-flex align-items-center justify-content-center mb-2">
                <Col xs={12} lg={6}>
                    {filas1.map((texto, index) => (
                        <Row key={index} className="d-flex align-items-center justify-content-center mb-2 p-3">
                            <Col className="text-center">{texto}</Col>
                            <Col>
                                <input
                                    className="buscador_input"
                                    type="text"
                                    maxLength={10}
                                    style={{backgroundColor: '#FDF6EA'}}
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col xs={12} lg={6}>
                    {filas2.map((texto, index) => (
                        <Row key={index} className="d-flex align-items-center justify-content-center mb-2 p-3">
                            <Col className="text-center">{texto}</Col>
                            <Col>
                                <input
                                    className="buscador_input"
                                    type="text"
                                    maxLength={10}
                                    style={{backgroundColor: '#FDF6EA'}}
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default RectanguloBuscador;
