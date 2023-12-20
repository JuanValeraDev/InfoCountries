import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Introduccion} from './componentes/Introduccion'
import {Opciones} from './componentes/Opciones'
import {Buscador} from "./componentes/Buscador.jsx";
import {Galeria} from "./componentes/Galeria.jsx";

function App() {
    return (
        <>
            <Col>

                {/*
                <Introduccion/>
                <Opciones/>

                */}

                <Buscador/>
                <Galeria/>
            </Col>
        </>
    )
}

export default App
