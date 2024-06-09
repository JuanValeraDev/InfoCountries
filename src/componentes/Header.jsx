import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const node = useRef(null);

    const handleClickOutside = (event) => {
        if (node.current && !node.current.contains(event.target)) {
            setExpanded(false);
        }
    };
    useEffect(() => {
        if (expanded) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expanded]);

    return (
        <Navbar ref={node} expanded={expanded} variant="dark" expand="lg" className={"navbar"}>
            <Container>
                <Navbar.Brand onClick={() => setExpanded(false)} as={Link} to="/">InfoCountries</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}
                               aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setExpanded(false)} as={Link}
                                  to="/busquedaAvanzada">Buscador</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/comparador">Comparador</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/galeria">Galería</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/minijuego">Minijuego</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">Acerca de</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
