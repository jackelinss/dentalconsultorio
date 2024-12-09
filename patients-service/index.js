const express = require('express');
const bodyParser = require('body-parser');
const pacienteRoute = require('./pacienteRoute');  // Asegúrate de que el nombre de la importación sea correcto
const app = express();
const port = 4001; // Puerto para el microservicio de pacientes

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas de pacientes
app.use('/api', pacienteRoute);  // Asegúrate de que aquí se use `pacienteRoutes`

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Microservicio de pacientes corriendo en http://localhost:${port}`);
});