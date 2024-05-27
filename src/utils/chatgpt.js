//Cuando se ejecuta npm start NODE_ENV se establece en development, y cuando se ejecuta npm run build NODE_ENV se establece en production.

const API_URL = process.env.NODE_ENV === 'production' ? 'https://infocountries-32ap.onrender.com' : 'http://localhost:3000';

export const compareCountries = async (firstCountry, secondCountry) => {
    try {
        const response = await fetch(`${API_URL}/compareCountries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({firstCountry, secondCountry}),
        });
        console.log("API_URL: ", API_URL)
        console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)
        if (!response.ok) {
            console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)
            console.log("API_URL: ", API_URL)
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data: ', data)
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
};

