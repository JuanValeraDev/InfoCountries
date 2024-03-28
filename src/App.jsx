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
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Outlet, Link as Router} from "react-router-dom";
import { Pagenotfound } from './componentes/Pagenotfound.jsx';

function App() {
    return (
        <>
            {/* {<Introduccion />}
            {<Opciones />}
            {<Comparador />}
            {<Buscador />}
            {<Galeria />}
            {<Juego />}
            {<About />} */}
            <BrowserRouter>
                <Routes>
                    <Route index element={<Introduccion/>} />
                    <Route path="/opciones" element={<Opciones />} />
                    <Route path="/opciones/busquedaAvanzada" element={<Buscador />} />
                    <Route path="/opciones/comparador" element={<Comparador />} />
                    <Route path="/opciones/galeria" element={<Galeria />} />
                    <Route path="/opciones/minijuego" element={<Juego />} />
                    <Route path="*" element={<Pagenotfound />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
