// controllers/patientController.js
const patientModel = require('./pacienteModel');

// Crear un nuevo paciente
const createPatient = (req, res) => {
  const patientData = req.body;

  patientModel.createPatient(patientData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creando el paciente', error: err });
    }
    res.status(201).json({ message: 'Paciente creado con éxito', patientId: results.insertId });
  });
};

// Obtener un paciente por ID
const getPatientById = (req, res) => {
  const { id } = req.params;

  patientModel.getPatientById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo el paciente', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Obtener todos los pacientes
const getAllPatients = (req, res) => {
  patientModel.getAllPatients((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo los pacientes', error: err });
    }
    res.status(200).json(results);
  });
};

// Actualizar un paciente
const updatePatient = (req, res) => {
  const { id } = req.params;
  const patientData = req.body;

  patientModel.updatePatient(id, patientData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error actualizando el paciente', error: err });
    }
    res.status(200).json({ message: 'Paciente actualizado con éxito' });
  });
};

// Eliminar un paciente
const deletePatient = (req, res) => {
  const { id } = req.params;

  patientModel.deletePatient(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error eliminando el paciente', error: err });
    }
    res.status(200).json({ message: 'Paciente eliminado con éxito' });
  });
};

module.exports = {
  createPatient,
  getPatientById,
  getAllPatients,
  updatePatient,
  deletePatient,
};