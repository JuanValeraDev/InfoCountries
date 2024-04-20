import React, {useEffect, useState} from "react"
import {Rectangulo} from "./Rectangulo.jsx";
import {Card, Col, Row} from "react-bootstrap";
import RectanguloBuscador from "./RectanguloBuscador.jsx";

export const MyContext = React.createContext({
    handlers: {},
    selectData: [],
    dataSelected: {
        "Nombre": null,
        "Moneda": null,
        "Idioma": null,
        "Región": null,
        "Subregión": null,
        "Capital": null
    }
});


export const Buscador = () => {
    const [names, setNames] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [regions, setRegions] = useState([]);
    const [subregions, setSubregions] = useState([]);
    const [capitals, setCapitals] = useState([]);

    const [resultsName, setResultsName] = useState([]);
    const [resultsCurrency, setResultsCurrency] = useState([]);
    const [lastFetchedName, setLastFetchedName] = useState(null);
    const [lastFetchedCurrency, setLastFetchedCurrency] = useState(null);


    let combinedResults = resultsName.map(nameResult => {
        console.log("In combinedResults, \nresultsName", resultsName, "resultsCurrency", resultsCurrency)
        let currencyResult = resultsCurrency.find(currencyResult => currencyResult.name.common === nameResult.name.common);
        return {...nameResult, ...currencyResult};
    });

    const [dataSelected, setDataSelected] = useState({
        "Nombre": null,
        "Moneda": null,
        "Idioma": null,
        "Región": null,
        "Subregión": null,
        "Capital": null
    });

    const searchFieldOptions = [
        {field: 'Nombre', options: names},
        {field: 'Moneda', options: currencies},
        {field: 'Idioma', options: languages},
        {field: 'Región', options: regions},
        {field: 'Subregión', options: subregions},
        {field: 'Capital', options: capitals},
    ];

    const dataSearched = {
        "Nombre": names,
        "Moneda": currencies,
        "Idioma": languages,
        "Región": regions,
        "Subregión": subregions,
        "Capital": capitals
    }


    let filteredData = {};
    for (let [key, value] of Object.entries(dataSelected)) {
        if (value !== null) {
            filteredData[key] = dataSearched[key].filter(option => option.value === value.value);
        }
    }


    const handleNameChange = (selectedOption) => {
        setDataSelected(prevState => ({...prevState, "Nombre": selectedOption}));
    };
    const handleCurrencyChange = (selectedOption) => {
        setDataSelected(prevState => ({...prevState, "Moneda": selectedOption}));
    }
    const handleLanguageChange = (selectedOption) => {
        setDataSelected(prevState => ({...prevState, "Idioma": selectedOption}));
    }
    const handleRegionChange = (selectedOption) => {
        setDataSelected(prevState => ({...prevState, "Región": selectedOption}));
    }
    const handleSubregionChange = (selectedOption) => {
        setDataSelected(prevState => ({...prevState, "Subregión": selectedOption}));
    }
    const handleCapitalChange = (selectedOption) => {
        setDataSelected(prevState => ({...prevState, "Capital": selectedOption}));
    }

    const handlers = {
        "Nombre": handleNameChange,
        "Moneda": handleCurrencyChange,
        "Idioma": handleLanguageChange,
        "Región": handleRegionChange,
        "Subregión": handleSubregionChange,
        "Capital": handleCapitalChange
    }

    useEffect(() => {
        const fetchData = async () => {
            async function fetchName(data) {
                let apiUrl = "https://restcountries.com/v3.1/name/";


                if (filteredData["Nombre"] && filteredData["Nombre"] !== lastFetchedName) {
                    apiUrl += filteredData["Nombre"][0].value;
                    setLastFetchedName(filteredData["Nombre"]);
                    //    console.log("apiUrl", apiUrl, "lastFetchedName", lastFetchedName, "filteredData[Nombre]", filteredData["Nombre"])
                }
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setResultsName(data);
                    } else {
                        console.error("Data is not an array:", data);
                        // handle the situation appropriately, e.g., setResultsName to an empty array
                        setResultsName([]);
                    }
                    //   console.log("Nombre results:", resultsName);
                } catch (error) {
                    console.error("Error al obtener los países:", error);
                }

                const names = data.map(country => ({value: country.name.common, label: country.name.common}));
                const uniqueNames = getUniqueSorted(names);
                setNames(uniqueNames);
            }

            async function fetchCurrencies(data) {
                let apiUrl = "https://restcountries.com/v3.1/currency/";


                if (filteredData["Moneda"] && filteredData["Moneda"] !== lastFetchedCurrency) {
                    apiUrl += filteredData["Moneda"][0].value.toLowerCase()
                    setLastFetchedCurrency(filteredData["Moneda"]);
                    console.log("apiUrl", apiUrl, "lastFetchedCurrency", lastFetchedCurrency, "filteredData[Moneda]", filteredData["Moneda"])
                }
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setResultsCurrency(data);
                    } else {
                        //  console.error("Data is not an array:", data);
                        // handle the situation appropriately, e.g., setResultsName to an empty array
                        setResultsCurrency([]);
                    }
                    // console.log("Moneda results: ", resultsCurrency);
                } catch (error) {
                    console.error("Error al obtener los países:", error);
                }


                const currencies = data.flatMap(country =>
                    Object.values(country.currencies).map(currency => ({value: currency.name, label: currency.name}))
                );
                const uniqueCurrencies = getUniqueSorted(currencies);
                setCurrencies(uniqueCurrencies);
            }

            try {

                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,currencies,languages,region,subregion,capital");
                const data = await response.json();
                await fetchName(data);
                await fetchCurrencies(data);

                const languages = data.flatMap(country =>
                    Object.values(country.languages).map(language => ({value: language, label: language}))
                );
                const uniqueLanguages = getUniqueSorted(languages);
                setLanguages(uniqueLanguages);

                const regions = data.map(country => ({value: country.region, label: country.region}));
                const uniqueRegions = getUniqueSorted(regions);
                setRegions(uniqueRegions);

                const subregions = data.map(country => ({value: country.subregion, label: country.subregion}));
                const uniqueSubregions = getUniqueSorted(subregions);
                setSubregions(uniqueSubregions);

                const capitals = data.reduce((acc, country) => {
                    if (country.capital[0]) {
                        acc.push({value: country.capital[0], label: country.capital[0]});
                    }
                    return acc;
                }, []);
                const uniqueCapitals = getUniqueSorted(capitals);
                setCapitals(uniqueCapitals);

            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        const getUniqueSorted = (items) => {
            const uniqueItems = items.reduce((acc, current) => {
                const x = acc.find(item => item.label === current.label);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            uniqueItems.sort((a, b) => a.label.localeCompare(b.label));
            return uniqueItems;
        };

        fetchData();
    }, [dataSelected]);

    return (
        <MyContext.Provider value={{selectData: searchFieldOptions, handlers}}>

            <div className={"fondo fondo_buscador pb-5 pb-lg-0 main-content"}>
                <div className={"d-flex flex-column"}>
                    <h1 className={"titulo_buscador pt-5 mt-lg-5 mb-5"}>Busca como un profesional</h1>
                    <Row className={"mb-lg-5  justify-content-center "}>
                        <Col xs={11} sm={7} lg={6} xl={5} className={"z-2 justify-content-lg-start me-xl-5"}>

                            <RectanguloBuscador/>
                        </Col>
                        <Col xs={11} sm={7} lg={6} xl={5} className={"justify-content-lg-end"}>

                            <Rectangulo classNames={"rectangulo_buscador_2 container mt-5 mt-lg-0 ms-xl-5 p-sm-4"}
                                        backgroundColor={"#FFF2D8"}
                                        borderColor={"#113946"}
                                        textColor={"#113946"} padding={{padding: "20px"}}
                            >
                                <h1 className={"m-4"}>Resultados</h1>
                                <div className={"container"}>
                                    <Row>
                                        {
                                            combinedResults.map((options, index) => (
                                                options["name"] !== undefined &&
                                                options["currencies"] !== undefined && (
                                                    <Col xs={12} sm={6} lg={4} key={index}>
                                                        {
                                                            console.log("combinedResults ", combinedResults)
                                                        }
                                                        <Card key={index} option={options}>
                                                            <Card.Body>
                                                                <Card.Title>{options["name"].common}</Card.Title>
                                                                <Card.Text>{options["flag"]}</Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            ))}
                                    </Row>
                                </div>
                            </Rectangulo>
                        </Col>
                    </Row>
                </div>
            </div>
        </MyContext.Provider>

    )

}

