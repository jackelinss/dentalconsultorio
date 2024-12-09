const express = require('express');
const bodyParser = require('body-parser');
const tratamientoRoute = require('./citaRoute');  // Asegúrate de que el nombre de la importación sea correcto
const app = express();
const port = 4010; // Puerto para el microservicio de pacientes

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas de pacientes
app.use('/api', tratamientoRoute);  // Asegúrate de que aquí se use `pacienteRoutes`

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Microservicio de pacientes corriendo en http://localhost:${port}`);
});