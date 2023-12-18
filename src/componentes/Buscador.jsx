import React from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Fondo} from "./Fondo.jsx";
import fondo_buscador from "../assets/fondo_buscador 16.32.40.jpeg"

export const Buscador = () => {
    return (<div className={"buscador"}>


        <Fondo imagen={fondo_buscador}>
            <Rectangulo classNames={"rectangulo_buscador_1 container"} backgroundColor={"#113946"}
                        borderColor={"#FDF6EA"}
                        textColor={"#FDF6EA"}
                        size={{width: "800px", height: "230px"}
                        }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan. Vestibulum
                venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus tellus,
                molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit sodales
                ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus tempus at. Sed
                egestas venenatis blandit. Vestibulum ornare in erat vel consequat.
            </Rectangulo>
            <Rectangulo classNames={"rectangulo_buscador_2 container"} backgroundColor={"#FFF2D8"} borderColor={"#113946"}
                        textColor={"#113946"}
                        size={{width: "850px", height: "370px"}}
                        position={{position: "absolute", top: "45%", left: "25%"}}>
                <h1>Resultados</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ac ante sed accumsan. Vestibulum
                venenatis magna orci, eu iaculis leo interdum eget. Aliquam eget nulla neque. Vivamus tellus tellus,
                molestie et mauris sit amet, interdum imperdiet arcu. Pellentesque pulvinar nisl at elit sodales
                ultrices. Ut nec tincidunt justo. Curabitur condimentum interdum elit, in sagittis purus tempus at. Sed
                egestas venenatis blandit. Vestibulum ornare in erat vel consequat.
            </Rectangulo>
        </Fondo>
    </div>)
}
