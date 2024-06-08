import React from "react"
import {Col, Row} from "react-bootstrap";
import {Rectangulo} from "./Rectangulo.jsx";

export const About = () => {
    return (
        <div>
            <div className={"fondo fondo_about pb-5 pb-sm-0"}>
                <h1 className={"titulo_about pt-5 mt-lg-5"}>Sobre nosotros</h1>
                <Row className={"d-flex "}>
                    <Col className={"z-2"}>
                        <div style={{marginBottom: '100px'}}>
                            <Rectangulo classNames={"rectangulo_about_1 container mt-md-5"} backgroundColor={"#113946"}
                                        borderColor={"#BCA37F"}
                                        textColor={"#FFF2D8"} padding={{padding: "20px"}}
                            >
                                <h1>Quiénes somos</h1>
                                Somos Juan Valera y Víctor Gálvez, estudiantes de FP en Desarrollo de Aplicaciones
                                Multiplataforma (DAM) en el I.E.S. Chirinos. Esta página web es nuestro proyecto de fin
                                de
                                grado, creada para proporcionar información detallada y accesible sobre países de todo
                                el
                                mundo.

                                Apasionados por la informática y las buenas prácticas, hemos dedicado nuestro tiempo a
                                diseñar una plataforma útil y educativa. Aquí encontrarás datos actualizados sobre
                                geografía, cultura, gastronomía y más, todo organizado de manera fácil de navegar.

                                Esperamos que disfrutes explorando nuestra web tanto como nosotros disfrutamos
                                desarrollándola. ¡Gracias por visitarnos!
                            </Rectangulo>
                        </div>
                        <div style={{marginBottom: '100px'}}>
                            <h1 className={"subtitulo_about_contacto mt-5"} style={{color: "#113946"}}>Contacto</h1>
                            <p className={"texto_about_contacto"}>
                                Puedes acceder al repositorio de github de este
                                proyecto <a href="https://github.com/JuanValeraDev/InfoCountries">aquí</a>. <br/>
                                Si quieres contactar con nosotros personalmente puedes hacerlo aquí: <br/>
                                - Juan Valera: <a href="https://github.com/JuanValeraDev">Github</a> <br/>
                                - Víctor Gálvez: <a href="https://github.com/VictorGlvez">Github</a>
                            </p>
                        </div>
                    </Col>
                    <Col className={"z-2"}>

                        <Rectangulo classNames={"rectangulo_about_2 container mt-md-5"} backgroundColor={"#113946"}
                                    borderColor={"#FFF2D8"}
                                    textColor={"#FFF2D8"}
                                    padding={{padding: "20px"}}>
                            <h1>FAQs</h1>
                            <p>
                                <h3>¿Qué tipo de información puedo encontrar sobre cada país?</h3>
                                <p> En nuestra página web, puedes encontrar información básica sobre cada país, como su
                                    moneda,
                                    región y bandera, disponible en el buscador. Además, ofrecemos una galería de
                                    imágenes y
                                    la
                                    opción de comparar dos países en aspectos como política, cultura, gastronomía y
                                    turismo.</p>
                                <h3> ¿Puedo utilizar la información de la página para proyectos académicos o
                                    investigaciones?</h3>
                                <p>
                                    Sí, toda la información es de acceso abierto y está disponible para que la uses como
                                    necesites.
                                </p>
                                <h3>¿Hay algún costo asociado con el uso de la página web?</h3>
                                <p>No, la página web es totalmente gratuita. No hay ningún costo por usar ninguna de sus
                                    funciones.
                                </p>
                                <h3>¿Puedo contactar a los creadores de la página para consultas o sugerencias?</h3>
                                <p>Sí, los enlaces
                                    a nuestros perfiles de GitHub están disponibles en la sección de contacto, justo al
                                    lado
                                    de
                                    esta sección de FAQs.
                                </p>
                                <h3>¿La página web es accesible desde dispositivos móviles?</h3>
                                <p> Sí, nuestra página web es completamente accesible desde dispositivos móviles.
                                    Además,
                                    hemos
                                    desarrollado una versión específica para móviles utilizando React Native. Puedes
                                    encontrar
                                    más detalles y acceder al código en nuestro repositorio de GitHub: <span><a
                                        href="https://github.com/JuanValeraDev/InfoCountriesReactNative">aquí</a>.</span>
                                </p>
                            </p>
                        </Rectangulo>
                    </Col>

                </Row>

            </div>
        </div>
    )
}
