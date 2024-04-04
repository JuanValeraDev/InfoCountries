
var countries = [];

const fetchData = async () => {
    try {
        const flagsApiResponse = await fetch('https://restcountries.com/v3.1/all');
        const countriesData = await flagsApiResponse.json();

        countries = countriesData.map(country => ({
            name: country.name.common,
            flag: country.flags.png,
            capital: country.capital
        }));
    } catch (error) {
        console.error('Error con el fetch:', error);
    }
};

export function correctCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex]
}

export function options(correctCountryVar) {
    const otherCountries = countries.filter(country => country.name !== correctCountryVar.name).sort(() => Math.random() - 0.5).slice(0, 2);
    return shuffleArray([...otherCountries, correctCountryVar]);
}


// FUNCIONES COMUNES

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
};

// const shuffleArray = array => array.sort(() => Math.random() - 0.5);

fetchData();






