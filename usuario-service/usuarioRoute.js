// routes/usuarioRoute.js
const express = require('express');
const router = express.Router();
const usuarioController = require('./usuarioController');

// Middleware para validar que el ID sea un número
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }
  next();  // Si el ID es válido, pasa al siguiente middleware o controlador
};

// Crear un nuevo usuario
router.post('/usuarios', usuarioController.createUsuario);

// Obtener un usuario por ID
router.get('/usuarios/:id', validateId, usuarioController.getUsuarioById);

// Obtener todos los usuarios
router.get('/usuarios', usuarioController.getAllUsuarios);

// Actualizar un usuario
router.put('/usuarios/:id', validateId, usuarioController.updateUsuario);

// Eliminar un usuario
router.delete('/usuarios/:id', validateId, usuarioController.deleteUsuario);

module.exports = router;