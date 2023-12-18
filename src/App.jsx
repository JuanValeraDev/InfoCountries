import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Introduccion} from './componentes/Introduccion'
import {Opciones} from './componentes/Opciones'
import {Buscador} from "./componentes/Buscador.jsx";

function App() {
    return (
        <>
            <Col>
                <Introduccion/>
                <Opciones/>
                <Buscador/>
            </Col>
        </>
    )
}

export default App
