import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Introduccion } from './componentes/Introduccion'
import { Opciones } from './componentes/Opciones'
import { Buscador } from "./componentes/Buscador.jsx";
import { Galeria } from "./componentes/Galeria.jsx";
import { Juego } from "./componentes/Juego.jsx";
import { About } from "./componentes/About.jsx";
import { Comparador } from './componentes/Comparador.jsx';

function App() {
    return (
        <>
            {<Introduccion />}
            {<Opciones />}
            {<Comparador />}
            {<Buscador />}
            {<Galeria />}
            {<Juego />}
            {<About />}
        </>
    )
}

export default App
