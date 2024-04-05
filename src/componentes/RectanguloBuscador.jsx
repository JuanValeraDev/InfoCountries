import React, {useContext, useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import Select from "react-select";
import {countries} from '../utils/countries.js'
import {MyContext} from "./Buscador.jsx";


/*
En el rectángulo del resultado puedo poner los resultados en forma de tarjetas con la imagen de la bandera del país y el nombre del país.
Para ello, puedo hacer un fetch a la API de restcountries y obtener los nombres y las banderas de los países.
Luego, puedo mostrar los resultados en forma de tarjetas.

Para las tarjetas, puedo usar react-bootstrap y hacer un componente Card que reciba los detalles del país y los muestre.
Cada tarjeta se puede abrir al hacer click en ella y mostrar más detalles del país en un modal.

Para el modal, puedo usar react-bootstrap y hacer un componente Modal que reciba los detalles del país y los muestre.




 */

const RectanguloBuscador = () => {

   const {handlers, selectData} = useContext(MyContext);

    return (
        <div style={{
            backgroundColor: "#113946",
            borderColor: "#FDF6EA",
            color: "#FDF6EA",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            border: "thick solid"
        }}>
            <div className="container p-4">
                <Row>
                    {selectData.map((select, index) => (
                        <Col xs={12} md={6} key={index}>
                            <Row className="mb-3">
                                <Col xs={12} lg={4}>
                                    <label>{select.field}</label>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <Select
                                        className="text-start select_buscador"
                                        options={select.options}
                                        isClearable
                                        isSearchable
                                        onChange={handlers[select.field]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default RectanguloBuscador;




