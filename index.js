const express = require('express');
const app = express();
const port = 3000;

// Endpoint raíz (Hello World)
app.get('/', (req, res) => {
    res.send('¡Hola, Mundo desde una REST API!');
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor REST-API escuchando en http://localhost:${port}`);
});
