// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Crear un nuevo doctor
router.post('/doctors', doctorController.createDoctor);

// Obtener un doctor por ID
router.get('/doctors/:id', doctorController.getDoctorById);

// Actualizar un doctor
router.put('/doctors/:id', doctorController.updateDoctor);

// Eliminar un doctor
router.delete('/doctors/:id', doctorController.deleteDoctor);

module.exports = router;