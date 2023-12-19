import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

export const RowBuscador = ({texto}) => {
    return <Row className={"row_buscador"}>
        <Col>
            {texto}
        </Col>
        <Col>
            <input className={"buscador_input"}
                type={"text"}
                maxLength={10}
                style={{ backgroundColor: '#FDF6EA' }}
            />
        </Col>
        <Col>
                <IoIosArrowDown size={"20px"} />
        </Col>
    </Row>
}