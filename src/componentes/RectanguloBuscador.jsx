import React from "react";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import { countries } from '../utils/countries.js'


const RectanguloBuscador = () => {

    const fields = ["Nombre", "Moneda", "Idioma", "Región", "Subregión", "Código"];

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
            <div className="container p-4">
                <Row>
                    <Col xs={12} md={6}>
                        {fields.slice(0, 3).map((field, index) => (
                            <Row key={index} className="mb-3">
                                <Col xs={12} lg={4}>
                                    <label >{field}</label>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <Select
                                        className="text-start buscadores"
                                        options={countries}
                                        isClearable
                                        isSearchable
                                    />
                                    {/* <input className="form-control" type="text"/> */}
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col xs={12} md={6}>
                        {fields.slice(3).map((field, index) => (
                            <Row key={index} className="mb-3">
                                <Col xs={12} lg={4}>
                                    <label >{field}</label>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <Select
                                        className="text-start"
                                        options={countries}
                                        isClearable
                                        isSearchable
                                    />
                                    {/* <input className="form-control" type="text" /> */}
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default RectanguloBuscador;

{    /*
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
    <Row className="d-flex align-items-center justify-content-center mb-2 p-2">
        <Col xs={12} lg={6}>
            {filas1.map((texto, index) => (
                <Row key={index} className="d-flex align-items-center justify-content-center mb-2 p-3 ">
                    <Col className="text-center ms-lg-3 me-lg-3">{texto}</Col>
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
                    <Col className="text-center ms-lg-3 me-lg-3">{texto}</Col>
                    <Col className={"me-2"}>
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
*/}


