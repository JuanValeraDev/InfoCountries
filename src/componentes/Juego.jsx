import React, { useState, useEffect } from "react"
import { Rectangulo } from "./Rectangulo.jsx";
import { Modal } from 'react-bootstrap'
import { correctCountry, options } from '../utils/juego.js';


export const Juego = () => {

    const [correctAnswer, setCorrectAnswer] = useState({});
    const [buttonOptions, setButtonOptions] = useState([]);
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(1)
    const [isSelect, setIsSelect] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadGame()
    }, []);


    const loadGame = () => {
        const correctAnswerResult = correctCountry();
        const buttonOptions = options(correctAnswerResult);
        setCorrectAnswer(correctAnswerResult)
        setButtonOptions(buttonOptions);
    }

    const resetGame = () => {
        setRound(1);
        setCount(0);
        setShowModal(false);
        loadGame();
    };

    const buttonClick = (option) => {
        setIsSelect(true);
        setSelectedButton(option.name);
        if (option.name === correctAnswer.name) {
            setCount(count + 1);
        }

        setTimeout(() => {
            setIsSelect(false);
            loadGame()
            setRound(round + 1)
            if (round === 10) {
                setShowModal(true);
            }
        }, 1200);
    };

    return (
        <div className={"fondo fondo_juego justify-content-center "}>
            <div
                className={"d-flex flex-column flex-lg-row justify-content-xl-around align-items-center "}>
                <h1 className={"titulo_juego"}>¡Hora de divertirse!</h1>
                <h2>Ronda {round}/10</h2>

                <Rectangulo classNames={"z-2 mx-5 my-5"} backgroundColor={"#113946"}
                    borderColor={"#FFF2D8"}
                    textColor={"#113946"}>
                    <h1 className={"subtitulo_juego my-3 mx-5"}>Adivina la capital</h1>

                    <img src={correctAnswer.flag} />

                    {/* <h2 className={"subtitulo_juego my-3 mx-5"}>{correctAnswer.name}</h2> */}

                    <div className={"botonera_juego m-4 mt-md-5 d-flex flex-column flex-xl-row align-items-center"}>
                        {buttonOptions.map((option, index) => (

                            <button key={index} onClick={() => buttonClick(option)}
                                className={" m-4 p-3 ps-5 pe-5 boton_juego" + (selectedButton === option.name ? (option.name === correctAnswer.name ? " respuesta_correcta" : " respuesta_incorrecta") : "")}
                                disabled={isSelect}>
                                {option.name}
                            </button>

                            // (isSelect && option.name === correctAnswer.name ? " respuesta_correcta" : isSelect && option.name !== correctAnswer.name ? " respuesta_incorrecta" :"")} disabled={isSelect}>



                            // <button key={index} className={" m-4 p-3 ps-5 pe-5 boton_juego"}>
                            //     {option.capital}
                            // </button>
                        ))}
                    </div>
                </Rectangulo>
            </div>


            <Modal show={showModal} centered size="xl">
                {/* onHide={handleModalClose} */}
                <Modal.Body>
                    <div className=" d-flex flex-column align-items-center">
                    <p>Game Over!</p>
                    <p>Your score: {count}</p>
                    <button onClick={resetGame}>Restart</button>
                    </div>
                    
                </Modal.Body>
            </Modal>

        </div>
    )
}
