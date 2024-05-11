/*
Esto es un intento previo sin éxito.El problema aquí es que es muy peligroso
exponer la apiKey en el frontend, por lo que se debe hacer en un servicio propio.


import OpenAI from "openai";


const openai = new OpenAI({ apiKey: 'sk-proj-9MR9G4RnaqEZhaBJNx07T3BlbkFJUFp2F3BdNekM9bDTugs8' })


const messages = [
    ({role: "system", content: "Eres un experto sobre de países."})]

export async function compareCountries(firstCountry, secondCountry) {
    messages.push(
        ({
            role: "human",
            content: `Quiero que compares ${firstCountry} y ${secondCountry} en función de las siguientes temáticas:
             política, gastronomía, cultural y turísitca. Quiero que cada comparación me la devuelvas en un párrafo
             distinto de no más de 600 palabras. No escribas nada más que lo que te pido`
        }))
    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0].message.content)
    return completion.choices[0].message.content
}

Esta es la explicación de los pasos que se deben seguir para hacerlo:


1. **Crea un nuevo archivo para tu servidor Express.js**: Este archivo será el punto de entrada para tu servidor. Puedes llamar a este archivo `server.js`.

2. **Instala Express.js y CORS**: Necesitarás instalar Express.js, que es un marco de servidor web para Node.js. También necesitarás instalar CORS (Cross-Origin Resource Sharing), que es un paquete que te permite hacer solicitudes desde un dominio a otro. Puedes instalar ambos con el siguiente comando:

```bash
npm install express cors
```

3. **Configura tu servidor Express.js**: En tu archivo `server.js`, necesitarás importar express y cors, y luego configurar tu servidor. Aquí hay un ejemplo de cómo hacerlo:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
```

4. **Crea un endpoint para las llamadas a la API de OpenAI**: Este endpoint aceptará solicitudes POST, hará la llamada a la API de OpenAI y luego devolverá la respuesta. Aquí hay un ejemplo de cómo hacerlo:

```javascript
const OpenAI = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post('/compareCountries', async (req, res) => {
  const { firstCountry, secondCountry } = req.body;
  const messages = [
    { role: "system", content: "Eres un experto sobre de países." },
    { role: "human", content: `Quiero que compares ${firstCountry} y ${secondCountry} en función de las siguientes temáticas: política, gastronomía, cultural y turísitca. Quiero que cada comparación me la devuelvas en un párrafo distinto de no más de 600 palabras. No escribas nada más que lo que te pido` }
  ];
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });
  res.json(completion.choices[0].message.content);
});
```

5. **Inicia tu servidor**: Finalmente, necesitarás iniciar tu servidor. Puedes hacerlo con el siguiente código:

```javascript
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
```

6. **Configura tu variable de entorno en render.com**: Ve al panel de control de render.com y busca la sección de variables de entorno. Añade una nueva variable de entorno llamada `OPENAI_API_KEY` y establece su valor en tu clave API de OpenAI.

7. **Haz solicitudes a tu servidor desde el cliente**: En lugar de hacer las llamadas a la API de OpenAI directamente desde el cliente, ahora harás solicitudes a tu propio servidor, que a su vez hará las llamadas a la API de OpenAI. Aquí hay un ejemplo de cómo hacerlo usando la función `fetch`:

```javascript
const API_URL = process.env.NODE_ENV === 'production' ? 'https://my-app.render.com' : 'http://localhost:3000';

const compareCountries = async (firstCountry, secondCountry) => {
  const response = await fetch(`${API_URL}/compareCountries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstCountry, secondCountry }),
  });
  const data = await response.json();
  return data;
};
```

8. **Configura tu aplicación para ejecutar el servidor y la aplicación al mismo tiempo**: Para hacer esto, necesitarás instalar un paquete llamado `concurrently`. Puedes instalarlo con el siguiente comando:

```bash
npm install --save-dev concurrently
```

Luego, en tu archivo `package.json`, puedes agregar un nuevo script para iniciar tu servidor Express.js, y luego modificar tu script `dev` para que inicie tanto tu servidor Express.js como tu aplicación React al mismo tiempo. Aquí te muestro cómo podrías hacerlo:

```json
"scripts": {
  "dev": "concurrently \"vite\" \"node server.js\"",
  "server": "node server.js",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "rundev": "npm run dev"
},
```

Recuerda que debes reemplazar `'https://my-app.render.com'` con la URL de tu aplicación en render.com y `server.js` con la ruta al archivo de tu servidor Express.js si no está en el directorio raíz de tu proyecto.


 */





import {ChatOpenAI} from "@langchain/openai";

const apiKey = "no-apikey-provided"

const chatModel = new ChatOpenAI({
    apiKey: apiKey,
    model: "gpt-3.5-turbo"
});

const messages = [
    ({role: "system", content: "Eres un experto sobre de países."})]


export async function compareCountries(firstCountry, secondCountry) {
    messages.push(
        ({role: "human", content:`Quiero que compares ${firstCountry} y ${secondCountry} en función de las siguientes temáticas: política, gastronomía, cultural y turísitca. Quiero que cada comparación me la devuelvas en un párrafo distinto de no más de 600 palabras. No escribas nada más que lo que te pido`}))

    // const answer = await chatModel.invoke(messages).content
   // console.log("Answer: ", answer)
    const answer = "Políticamente, España y Francia tienen sistemas democráticos consolidados. España es una monarquía parlamentaria, mientras que Francia es una república semipresidencialista. Ambos países son miembros de la Unión Europea y comparten similitudes en su sistema de gobierno, aunque difieren en detalles como la organización territorial y la gestión de las autonomías.\n\nHistóricamente, España y Francia tienen legados ricos y complejos. España fue una potencia colonial importante, con vastos territorios en América, África y Asia, mientras que Francia también tuvo un vasto imperio colonial y desempeñó un papel significativo en la historia europea, desde la Revolución Francesa hasta las dos guerras mundiales.\n\nEn cuanto a gastronomía, ambos países son conocidos por su excelente cocina. La gastronomía española se caracteriza por su variedad regional, desde la paella valenciana hasta el jamón ibérico de Andalucía. Por otro lado, la cocina francesa es famosa por su refinamiento y sofisticación, con platos icónicos como el foie gras, el boeuf bourguignon y los macarons.\n\nCulturalmente, España y Francia son cunas de arte, literatura y música. España es conocida por artistas como Picasso, Dalí y Gaudí, así como por sus festivales de flamenco y corridas de toros. Francia, por su parte, ha sido hogar de grandes escritores como Victor Hugo y Marcel Proust, además de ser famosa por su arquitectura, moda y cine.\n\nEn el ámbito turístico, tanto España como Francia son destinos populares a nivel mundial. España atrae a millones de turistas cada año con sus playas, ciudades históricas como Barcelona y Madrid, y sitios culturales como la Alhambra de Granada. Francia, por otro lado, es famosa por la Torre Eiffel, el Louvre, la Riviera Francesa y los viñedos de Burdeos, entre otros atractivos."
    return answer
}


