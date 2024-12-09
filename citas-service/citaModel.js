// models/citaModel.js
const db = require('./db');  // Asegúrate de tener la conexión a la base de datos configurada correctamente

// Crear una nueva cita
const createCita = (citaData, callback) => {
  const { especializacionDoctor, idDoctor, nombreUsuario, tarifaConsulta, fechaCita, horaCita } = citaData;
  const query = 'INSERT INTO cita (especializacionDoctor, idDoctor, nombreUsuario, tarifaConsulta, fechaCita, horaCita) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(query, [especializacionDoctor, idDoctor, nombreUsuario, tarifaConsulta, fechaCita, horaCita], (err, results) => {
    callback(err, results);
  });
};

// Obtener una cita por ID
const getCitaById = (id, callback) => {
  const query = 'SELECT * FROM cita WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

// Obtener todas las citas
const getAllCitas = (callback) => {
  const query = 'SELECT * FROM cita';
  
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

// Actualizar una cita
const updateCita = (id, citaData, callback) => {
  const { especializacionDoctor, idDoctor, nombreUsuario, tarifaConsulta, fechaCita, horaCita } = citaData;
  const query = 'UPDATE cita SET especializacionDoctor = ?, idDoctor = ?, nombreUsuario = ?, tarifaConsulta = ?, fechaCita = ?, horaCita = ? WHERE id = ?';
  
  db.query(query, [especializacionDoctor, idDoctor, nombreUsuario, tarifaConsulta, fechaCita, horaCita, id], (err, results) => {
    callback(err, results);
  });
};

// Eliminar una cita
const deleteCita = (id, callback) => {
  const query = 'DELETE FROM cita WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  createCita,
  getCitaById,
  getAllCitas,
  updateCita,
  deleteCita,
};