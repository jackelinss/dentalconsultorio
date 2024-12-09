// routes/patientRoute.js
const express = require('express');
const router = express.Router();
const patientController = require('./pacienteController');

// Crear un nuevo paciente
router.post('/patients', patientController.createPatient);

// Obtener un paciente por ID
router.get('/patients/:id', patientController.getPatientById);

// Obtener todos los pacientes
router.get('/patients', patientController.getAllPatients);

// Actualizar un paciente
router.put('/patients/:id', patientController.updatePatient);

// Eliminar un paciente
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;