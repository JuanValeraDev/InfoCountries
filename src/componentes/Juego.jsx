import React, { useState, useEffect } from "react"
import { Rectangulo } from "./Rectangulo.jsx";


export const Juego = () => {
    const [correctCountry, setCorrectCountry] = useState({});
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const flagsApiResponse = await fetch('https://restcountries.com/v3.1/all');
                const countriesData = await flagsApiResponse.json();

                const countries = countriesData.map(country => ({
                    name: country.name.common,
                    flag: country.flags.png
                }));           

                const randomIndex = Math.floor(Math.random() * countries.length);
                const correctCountryData = countries[randomIndex];
                setCorrectCountry(correctCountryData)


                const otherCountries = countries.filter(country => country.name !== correctCountryData.name).sort(() => Math.random() - 0.5).slice(0, 2);
                const combinedOptions = [...otherCountries, correctCountryData];
                setOptions(shuffleArray(combinedOptions));
            } catch (error) {
                console.error('Error con el fetch:', error);
            }
        };
        fetchData();
    }, []);

    const shuffleArray = (array) => {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray;
    };

    return (
        <div className={"fondo fondo_juego justify-content-center "}>
            <div
                className={"d-flex flex-column flex-lg-row justify-content-xl-around align-items-center "}>
                <h1 className={"titulo_juego"}>¡Hora de divertirse!</h1>
            
                <Rectangulo classNames={"z-2 mx-5 my-5"} backgroundColor={"#113946"}
                    borderColor={"#FFF2D8"}
                    textColor={"#113946"}>
                    <h1 className={"subtitulo_juego my-3 mx-5"}>Adivina la capital</h1>
                    <img src={correctCountry.flag} />


                    <div className={"botonera_juego m-4 mt-md-5 d-flex flex-column flex-xl-row align-items-center"}>
                        {options.map((option, index) => (
                            <button key={index} className={" m-4 p-3 ps-5 pe-5 boton_juego"}>
                                {option.name}
                            </button>
                        ))}
                    </div>
                </Rectangulo>
            </div>
        </div>
    )
}