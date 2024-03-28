import React from 'react';
import {Col, Row} from "react-bootstrap";
import {TextareaAutosize} from "@mui/material";

const Footer = () => {
    return (
        <footer style={{
            position: 'fixed',
            bottom: '0',
            width: '100%',
            backgroundColor: '#113946',
            color: '#FFF2D8',
            textAlign: 'center',
            padding: '15px',
            zIndex: 1000
        }}>
            <Row className={"d-flex row"}>
                <Col className={"align-self-center"}>InfoCountries</Col>
                <Col>Juan Valera y Víctor Gálvez</Col>
            </Row>
        </footer>
    );
};

export default Footer;
