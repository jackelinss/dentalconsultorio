// controllers/usuarioController.js
const usuarioModel = require('./usuarioModel');

// Crear un nuevo usuario
const createUsuario = (req, res) => {
  const usuarioData = req.body;

  if (!usuarioData.correo || !usuarioData.nombre || !usuarioData.password || !usuarioData.rol) {
    return res.status(400).json({ message: 'El correo, nombre, password y rol son requeridos' });
  }

  usuarioModel.createUsuario(usuarioData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creando el usuario', error: err });
    }
    res.status(201).json({ message: 'Usuario creado con éxito', usuarioId: results.insertId });
  });
};

// Obtener un usuario por ID
const getUsuarioById = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  usuarioModel.getUsuarioById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo el usuario', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Obtener todos los usuarios
const getAllUsuarios = (req, res) => {
  usuarioModel.getAllUsuarios((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo los usuarios', error: err });
    }
    res.status(200).json(results);
  });
};

// Actualizar un usuario
const updateUsuario = (req, res) => {
  const { id } = req.params;
  const usuarioData = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  usuarioModel.updateUsuario(id, usuarioData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error actualizando el usuario', error: err });
    }
    res.status(200).json({ message: 'Usuario actualizado con éxito' });
  });
};

// Eliminar un usuario
const deleteUsuario = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  usuarioModel.deleteUsuario(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error eliminando el usuario', error: err });
    }
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  });
};

module.exports = {
  createUsuario,
  getUsuarioById,
  getAllUsuarios,
  updateUsuario,
  deleteUsuario,
};