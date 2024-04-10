import React, { useState, useEffect } from "react"
import { Rectangulo } from "./Rectangulo.jsx";
import { Modal } from 'react-bootstrap'
import { correctCountry, options } from '../utils/juego.js';
import { Navigate, useNavigate } from 'react-router-dom'
import gameMusic from '../assets/audio/game.mp3';
import correctSound from '../assets/audio/correct.mp3';
import incorrectSound from '../assets/audio/incorrect.mp3';

export const JuegoCapital = () => {

    const [correctAnswer, setCorrectAnswer] = useState({});
    const [buttonOptions, setButtonOptions] = useState([]);
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(1)
    const [isSelect, setIsSelect] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const navigate = useNavigate()
    const correctAudio = new Audio(correctSound);
    const incorrectAudio = new Audio(incorrectSound);

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

    const finalMessage = () => {
        if (count === 0) {
            return "Eres horrible"
        }
        if (count === 1) {
            return "¿De verdad? ¿Solo una? en fin...."
        }
        if (count > 1 && count < 5) {
            return "Has suspendido... ¡la próxima vez será! ¡Ánimo!"
        }
        if (count >= 5 && count < 7) {
            return "¡Bien hecho! A ver si la próxima vez las aciertas todas"
        }
        if (count >= 7 && count < 10) {
            return "¡Bien hecho! A ver si la próxima vez las aciertas todas"
        }
        if (count === 10) {
            return "¡Eres un fenómeno! Qué pena que saberte todas las capitales no sirva de nada..."
        }
    }

    const buttonClick = (option) => {
        setIsSelect(true);
        setSelectedButton(option.name);
        if (option.name === correctAnswer.name) {
            setCount(count + 1);
            incorrectAudio.play();
        } else {
            correctAudio.play();
        }

        setTimeout(() => {
            setIsSelect(false);
            if (round < 10 && !showModal) {
                setRound(round + 1);
                loadGame();
            } else if (round === 10) {
                setShowModal(true);
            }
        }, 1200);
    };
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className={"fondo fondo_juego justify-content-center"}>
            {!isMuted && (
                <audio loop autoPlay>
                    <source src={gameMusic} type="audio/mpeg" />
                </audio>
            )}
            <div
                className={"d-flex flex-column align-items-center justify-content-center"}>
                <Rectangulo classNames={"position-relative z-2 mx-5 my-5"} backgroundColor={"#113946"}
                    borderColor={"#FFF2D8"}
                    textColor={"#113946"}>
                    <button className="button_sound" onClick={toggleMute}>
                        {isMuted ? '🔇' : '🔊'}
                    </button>
                    <h1 className={"subtitulo_juego my-4 mx-5"}>Adivina la bandera</h1>
                    <div className="round_counter">Ronda {round}/10</div>
                    <h2 className={"animacionbandera subtitulo_juego my-3"}>{correctAnswer.name}</h2>
                    <div className={"d-flex flex-column align-items-center"}>
                        {buttonOptions.map((option, index) => (
                            <button key={index} onClick={() => buttonClick(option)}
                                className={" m-4 p-3 ps-5 pe-5 boton_juego" + (selectedButton === option.name ? (option.name === correctAnswer.name ? " respuesta_correcta" : " respuesta_incorrecta") : "")}
                                disabled={isSelect}>
                                {option.capital}
                            </button>
                        ))}
                    </div>
                </Rectangulo>
            </div>
            <Modal show={showModal} centered>
                <Modal.Body className="modal_juego">
                    <div className=" d-flex flex-column align-items-center">
                        <h1>¡Se acabó!</h1>
                        <h2 className="my-2">Has acertado: {count} de 10</h2>
                        <p className="text-center my-4">{finalMessage()}</p>
                        <div className="d-flex">
                            <button className="mx-2 boton_modal_juego" onClick={resetGame}>Reiniciar</button>
                            <button className="mx-2 boton_modal_juego" onClick={() => navigate("/minijuego")}>Salir</button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}