import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {IoIosArrowDown} from "react-icons/io";

export const RowBuscador = ({classNames, texto}) => {
    return <Row className={`row_buscador ${classNames}`}>
        <Col>
            {texto}
        </Col>
        <Col>
            <input className={"buscador_input"}
                   type={"text"}
                   maxLength={10}
                   style={{backgroundColor: '#FDF6EA'}}
            />
        </Col>
        <Col>
            <IoIosArrowDown className={"row_buscador_flecha"} size={"20px"}/>
        </Col>
    </Row>
}