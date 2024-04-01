import React, {useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import Select from "react-select";
import {countries} from '../utils/countries.js'


const RectanguloBuscador = () => {

    const fields = ["Nombre", "Moneda", "Idioma", "Región", "Subregión", "Gentilicio"];
    const [names, setNames] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [regions, setRegions] = useState([]);
    const [subregions, setSubregions] = useState([]);
    const [capitals, setCapitals] = useState([]);

    const selectData = [
        {field: 'Nombre', options: names},
        {field: 'Moneda', options: currencies},
        {field: 'Idioma', options: languages},
        {field: 'Región', options: regions},
        {field: 'Subregión', options: subregions},
        {field: 'Capital', options: capitals},
    ];


    useEffect(() => {
        const fetchNames = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name");
                const data = await response.json();
                const commonNames = data.map(country => ({value: country.name.common, label: country.name.common}));
                const uniqueNames = commonNames.reduce((acc, current) => {
                    const x = acc.find(item => item.label === current.label);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                uniqueNames.sort((a, b) => a.label.localeCompare(b.label));
                setNames(uniqueNames);
            } catch (error) {
                console.error("Error al obtener los países:", error);
            }
        };
        const fetchCurrency = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=currencies");
                const data = await response.json();
                const currencyNames = data.flatMap(country =>
                    Object.values(country.currencies).map(currency => ({value: currency.name, label: currency.name}))
                );
                const uniqueNames = currencyNames.reduce((acc, current) => {
                    const x = acc.find(item => item.label === current.label);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                uniqueNames.sort((a, b) => a.label.localeCompare(b.label));
                setCurrencies(uniqueNames);
            } catch (error) {
                console.error("Error al obtener las monedas:", error);
            }
        };
        const fetchLanguage = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=languages");
                const data = await response.json();
                const languageNames = data.flatMap(country =>
                    Object.values(country.languages).map(language => ({value: language, label: language}))
                );
                const uniqueLanguageNames = languageNames.reduce((acc, current) => {
                    const x = acc.find(item => item.label === current.label);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                uniqueLanguageNames.sort((a, b) => a.label.localeCompare(b.label));
                setLanguages(uniqueLanguageNames);
            } catch (error) {
                console.error("Error al obtener los idiomas:", error);
            }
        };

        const fetchRegion = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=region");
                const data = await response.json();
                const regionNames = data.map(country => ({value: country.region, label: country.region}));
                const uniqueNames = regionNames.reduce((acc, current) => {
                    const x = acc.find(item => item.label === current.label);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                uniqueNames.sort((a, b) => a.label.localeCompare(b.label));
                setRegions(uniqueNames);

            } catch (error) {
                console.error("Error al obtener las regiones:", error);
            }

        };
        const fetchSubregion = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=subregion");
                const data = await response.json();
                const subregionNames = data.map(country => ({value: country.subregion, label: country.subregion}));
                const uniqueNames = subregionNames.reduce((acc, current) => {
                    const x = acc.find(item => item.label === current.label);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                uniqueNames.sort((a, b) => a.label.localeCompare(b.label));
                setSubregions(uniqueNames);
            } catch (error) {
                console.error("Error al obtener las subregiones:", error);
            }

        };
        const fetchCapitals = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all?fields=capital");
                const data = await response.json();
                const capitalNames = data.map(country => ({value: country.capital, label: country.capital}));
                const uniqueNames = capitalNames.reduce((acc, current) => {
                    const x = acc.find(item => item.label === current.label);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
                uniqueNames.sort((a, b) => a.label.localeCompare(b.label));
                setCapitals(uniqueNames);
            } catch (error) {
                console.error("Error al obtener las capitales:", error);
            }
        };
        fetchLanguage();
        fetchRegion();
        fetchSubregion();
        fetchCapitals();
        fetchNames();
        fetchCurrency();
    }, []);


    return (
        <div style={{
            backgroundColor: "#113946",
            borderColor: "#FDF6EA",
            color: "#FDF6EA",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            border: "thick solid"
        }}>
            <div className="container p-4">
                <Row>
                    {selectData.map((select, index) => (
                        <Col xs={12} md={6} key={index}>
                            <Row className="mb-3">
                                <Col xs={12} lg={4}>
                                    <label>{select.field}</label>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <Select
                                        className="text-start select_buscador"
                                        options={select.options}
                                        isClearable
                                        isSearchable
                                    />
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default RectanguloBuscador;

{    /*
const filas1 = ["Nombre:", "Moneda:", "Idioma:"];
const filas2 = ["Región:", "Subreg:", "Código:"];

return (
<div style={{
    backgroundColor: "#113946",
    borderColor: "#FDF6EA",
    color: "#FDF6EA",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    border: "thick solid"
}}>
    <Row className="d-flex align-items-center justify-content-center mb-2 p-2">
        <Col xs={12} lg={6}>
            {filas1.map((texto, index) => (
                <Row key={index} className="d-flex align-items-center justify-content-center mb-2 p-3 ">
                    <Col className="text-center ms-lg-3 me-lg-3">{texto}</Col>
                    <Col>
                        <input
                            className="buscador_input"
                            type="text"
                            maxLength={10}
                            style={{backgroundColor: '#FDF6EA'}}
                        />
                    </Col>
                </Row>
            ))}
        </Col>
        <Col xs={12} lg={6}>
            {filas2.map((texto, index) => (
                <Row key={index} className="d-flex align-items-center justify-content-center mb-2 p-3">
                    <Col className="text-center ms-lg-3 me-lg-3">{texto}</Col>
                    <Col className={"me-2"}>
                        <input
                            className="buscador_input"
                            type="text"
                            maxLength={10}
                            style={{backgroundColor: '#FDF6EA'}}
                        />
                    </Col>
                </Row>
            ))}
        </Col>
    </Row>
</div>
);
*/
}


