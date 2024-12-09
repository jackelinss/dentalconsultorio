const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config(); // Para manejar variables de entorno

const server = express();  // Aquí es donde defines el servidor como 'server'

// Configuración de CORS
server.use(cors());  // Cambié 'app' por 'server' aquí

// Middleware para parsear cuerpos JSON
server.use(express.json());  // Esto es correcto, no necesita cambio

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'trece1'
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Iniciar el servidor
server.listen(3001, function (error) {
  if (error) {
    console.log('Error al iniciar el servidor');
  } else {
    console.log('Servidor iniciado en el puerto 3001');  // Aquí el puerto debe ser 3001, no 8085
  }
});

// Crear una nueva persona
server.post('/api/persona/add', (req, res) => {
  let details = {
    nombre: req.body.nombre,
  };
  let sql = 'INSERT INTO personas SET ?';
  db.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: 'Error al crear la persona' });
    } else {
      res.send({ status: true, message: 'Persona creada exitosamente' });
    }
  });
});

// Obtener todas las personas
server.get('/api/persona1', (req, res) => {
  let sql = 'SELECT * FROM personas';
  db.query(sql, (error, result) => {
    if (error) {
      console.log('Error al obtener las personas');
      res.status(500).send({ status: false, message: 'Error al obtener las personas' });
    } else {
      res.send({ status: true, data: result });
    }
  });
});

// Buscar persona por ID
server.get('/api/persona/', (req, res) => {
  let personaId = req.params.id;
  let sql = 'SELECT * FROM personas WHERE id = ?';
  db.query(sql, [personaId], (error, result) => {
    if (error) {
      console.log('Error al obtener la persona');
      res.status(500).send({ status: false, message: 'Error al obtener la persona' });
    } else {
      res.send({ status: true, data: result });
    }
  });
});

server.get('/api/persona2/', (req, res) => {
  let personaId = req.params.id;
  
  // New query to join consulta, pacientes, and tratamiento tables
  let sql = `
    SELECT DISTINCT p.nombrePaciente, t.tratamiento, t.costo 
    FROM consulta c
    JOIN pacientes p ON c.idpaciente = p.id
    JOIN tratamiento t ON c.idtratamiento = t.id
    WHERE p.id = ?
  `;
  
  db.query(sql, [personaId], (error, result) => {
    if (error) {
      console.log('Error al obtener los datos');
      res.status(500).send({ status: false, message: 'Error al obtener los datos' });
    } else {
      res.send({ status: true, data: result });
    }
  });
});

// Actualizar persona por ID
server.put('/api/persona/update/:id', (req, res) => {
  let sql = 'UPDATE personas SET nombre = ? WHERE id = ?';
  let details = [req.body.nombre, req.params.id];
  db.query(sql, details, (error, result) => {
    if (error) {
      res.send({ status: false, message: 'Error al actualizar la persona' });
    } else {
      res.send({ status: true, message: 'Persona actualizada exitosamente' });
    }
  });
});

// Eliminar persona por ID
server.delete('/api/persona/delete/:id', (req, res) => {
  let sql = 'DELETE FROM personas WHERE id = ?';
  let personaId = req.params.id;
  db.query(sql, [personaId], (error, result) => {
    if (error) {
      res.send({ status: false, message: 'Error al eliminar la persona' });
    } else {
      res.send({ status: true, message: 'Persona eliminada exitosamente' });
    }
  });
});