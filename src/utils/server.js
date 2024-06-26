/* eslint-env node */
import dotenv from 'dotenv';
import express from "express";
import path from 'path';
import cors from "cors";
import OpenAI from "openai";
import {fileURLToPath} from "url";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), '..', '..');

const publicPath = path.join(__dirname, 'dist');


app.use(express.static(publicPath));

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post('/compareCountries', async (req, res) => {
    const {firstCountry, secondCountry} = req.body;
    const messages = [
        {role: "system", content: "Eres un experto sobre de países."},
        {
            role: "user",
            content: `Quiero que compares ${firstCountry.label} y ${secondCountry.label} en función de las siguientes temáticas: política, gastronomía, cultural y turística. Quiero que cada comparación me la devuelvas en un párrafo distinto de no más de 600 palabras. No escribas nada más que lo que te pido`
        }
    ];
    try {
        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo",
        });
        res.json(completion.choices[0].message.content);
    } catch (error) {
        console.log("Ha ocurrido un error: ", error);
        alert("Ha ocurrido un error con el servidor. Sentimos las molestias!")
    }
});

app.get('/compareCountries', async (req, res) => {
    res.json("Get request received");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
