// models/usuarioModel.js
const db = require('./db');  // Asegúrate de tener una conexión a la base de datos

// Crear un nuevo usuario
const createUsuario = (usuarioData, callback) => {
  const { correo, nombre, password, rol } = usuarioData;
  const query = 'INSERT INTO usuario (correo, nombre, password, rol) VALUES (?, ?, ?, ?)';
  
  db.query(query, [correo, nombre, password, rol], (err, results) => {
    callback(err, results);
  });
};

// Obtener un usuario por ID
const getUsuarioById = (id, callback) => {
  const query = 'SELECT * FROM usuario WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

// Obtener todos los usuarios
const getAllUsuarios = (callback) => {
  const query = 'SELECT * FROM usuario';
  
  db.query(query, (err, results) => {
    callback(err, results);
  });
};

// Actualizar un usuario
const updateUsuario = (id, usuarioData, callback) => {
  const { correo, nombre, password, rol } = usuarioData;
  const query = 'UPDATE usuario SET correo = ?, nombre = ?, password = ?, rol = ? WHERE id = ?';
  
  db.query(query, [correo, nombre, password, rol, id], (err, results) => {
    callback(err, results);
  });
};

// Eliminar un usuario
const deleteUsuario = (id, callback) => {
  const query = 'DELETE FROM usuario WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  createUsuario,
  getUsuarioById,
  getAllUsuarios,
  updateUsuario,
  deleteUsuario,
};