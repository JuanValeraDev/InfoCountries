import React, { useState, useEffect } from "react"
import { Rectangulo } from "./Rectangulo.jsx";
import { correctCountry, options } from '../utils/juego.js';


export const Juego = () => {

    const [correctAnswer, setCorrectAnswer] = useState({});
    const [buttonOptions, setButtonOptions] = useState([]);

    useEffect(() => {
        const correctAnswerResult = correctCountry();
        const buttonOptions = options(correctAnswerResult);
        setCorrectAnswer(correctAnswerResult)
        setButtonOptions(buttonOptions);
    }, []);

    return (
        <div className={"fondo fondo_juego justify-content-center "}>
            <div
                className={"d-flex flex-column flex-lg-row justify-content-xl-around align-items-center "}>
                <h1 className={"titulo_juego"}>¡Hora de divertirse!</h1>

                <Rectangulo classNames={"z-2 mx-5 my-5"} backgroundColor={"#113946"}
                    borderColor={"#FFF2D8"}
                    textColor={"#113946"}>
                    <h1 className={"subtitulo_juego my-3 mx-5"}>Adivina la capital</h1>

                    <img src={correctAnswer.flag} />

                    {/* <h2 className={"subtitulo_juego my-3 mx-5"}>{correctAnswer.name}</h2> */}

                    <div className={"botonera_juego m-4 mt-md-5 d-flex flex-column flex-xl-row align-items-center"}>
                        {buttonOptions.map((option, index) => (

                            <button key={index} className={" m-4 p-3 ps-5 pe-5 boton_juego"}>
                                {option.name}
                            </button>

                            // <button key={index} className={" m-4 p-3 ps-5 pe-5 boton_juego"}>
                            //     {option.capital}
                            // </button>
                        ))}
                    </div>
                </Rectangulo>
            </div>
        </div>
    )
}
