// routes/tratamientoRoute.js
const express = require('express');
const router = express.Router();
const tratamientoController = require('./tratamientoController');

// Middleware para validar que el ID sea un número
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }
  next();  // Si el ID es válido, pasa al siguiente middleware o controlador
};

// Crear un nuevo tratamiento
router.post('/tratamientos', tratamientoController.createTratamiento);

// Obtener un tratamiento por ID
router.get('/tratamientos/:id', validateId, tratamientoController.getTratamientoById);

// Obtener todos los tratamientos
router.get('/tratamientos', tratamientoController.getAllTratamientos);

// Actualizar un tratamiento
router.put('/tratamientos/:id', validateId, tratamientoController.updateTratamiento);

// Eliminar un tratamiento
router.delete('/tratamientos/:id', validateId, tratamientoController.deleteTratamiento);

module.exports = router;