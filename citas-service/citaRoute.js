// routes/citaRoute.js
const express = require('express');
const router = express.Router();
const citaController = require('./citaController');

// Middleware para validar que el ID sea un número
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }
  next();  // Si el ID es válido, pasa al siguiente middleware o controlador
};

// Crear una nueva cita
router.post('/citas', citaController.createCita);

// Obtener una cita por ID
router.get('/citas/:id', validateId, citaController.getCitaById);

// Obtener todas las citas
router.get('/citas', citaController.getAllCitas);

// Actualizar una cita
router.put('/citas/:id', validateId, citaController.updateCita);

// Eliminar una cita
router.delete('/citas/:id', validateId, citaController.deleteCita);

module.exports = router;