const express = require('express');
const app = express();
const routes = require('./routes/routes'); // Supondo que suas rotas estejam em './routes'

app.use(express.json());
app.use('/api', routes);

// Exporte a aplicação sem iniciar o servidor
module.exports = app;