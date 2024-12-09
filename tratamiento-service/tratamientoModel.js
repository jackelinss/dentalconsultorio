// models/tratamientoModel.js
const db = require('./db');  // Asegúrate de tener una conexión a la base de datos

// Crear un nuevo tratamiento
const createTratamiento = (tratamientoData, callback) => {
  const { tratamiento, costo } = tratamientoData;
  const query = 'INSERT INTO tratamiento (tratamiento, costo) VALUES (?, ?)';
  
  db.query(query, [tratamiento, costo], (err, results) => {
    callback(err, results);
  });
};

// Obtener un tratamiento por ID
const getTratamientoById = (id, callback) => {
  const query = 'SELECT * FROM tratamiento WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

// Obtener todos los tratamientos
const getAllTratamientos = (callback) => {
  const query = 'SELECT * FROM tratamiento';
  
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

// Actualizar un tratamiento
const updateTratamiento = (id, tratamientoData, callback) => {
  const { tratamiento, costo } = tratamientoData;
  const query = 'UPDATE tratamiento SET tratamiento = ?, costo = ? WHERE id = ?';
  
  db.query(query, [tratamiento, costo, id], (err, results) => {
    callback(err, results);
  });
};

// Eliminar un tratamiento
const deleteTratamiento = (id, callback) => {
  const query = 'DELETE FROM tratamiento WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  createTratamiento,
  getTratamientoById,
  getAllTratamientos,
  updateTratamiento,
  deleteTratamiento,
};