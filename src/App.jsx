import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Introduccion} from './componentes/Introduccion'
import {Opciones} from './componentes/Opciones'
import {Buscador} from "./componentes/Buscador.jsx";
import {Galeria} from "./componentes/Galeria.jsx";
import {Juego} from "./componentes/Juego.jsx";
import {About} from "./componentes/About.jsx";
import {Comparador} from './componentes/Comparador.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route, Outlet, Link as Router} from "react-router-dom";
import {Pagenotfound} from './componentes/Pagenotfound.jsx';
import Footer from "./componentes/Footer.jsx";

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
                    <Route index element={<> <Introduccion/>
                        <Opciones/></>}/>
                    {/*} <Route path="/opciones" element={<Opciones/>}/>*/}
                    <Route path="/busquedaAvanzada" element={<Buscador/>}/>
                    <Route path="/comparador" element={<Comparador/>}/>
                    <Route path="/galeria" element={<Galeria/>}/>
                    <Route path="/minijuego" element={<Juego/>}/>
                    <Route path="*" element={<Pagenotfound/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>

        </>
    )
}

export default App
