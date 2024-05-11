/* eslint-env node */
import dotenv from 'dotenv';
dotenv.config();
import express from "express";

import cors from "cors";

import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post('/compareCountries', async (req, res) => {
  const { firstCountry, secondCountry } = req.body;
  const messages = [
    { role: "system", content: "Eres un experto sobre de países." },
    { role: "user", content: `Quiero que compares ${firstCountry.label} y ${secondCountry.label} en función de las siguientes temáticas: política, gastronomía, cultural y turísitca. Quiero que cada comparación me la devuelvas en un párrafo distinto de no más de 600 palabras. No escribas nada más que lo que te pido` }
  ];
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });
  res.json(completion.choices[0].message.content);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
