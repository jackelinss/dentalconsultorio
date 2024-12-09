// app.js
const express = require('express');
const bodyParser = require('body-parser');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
const port = 4000; // Puerto diferente al del microservicio de pacientes

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas de doctores
app.use('/api', doctorRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Microservicio de doctores corriendo en http://localhost:${port}`);
});