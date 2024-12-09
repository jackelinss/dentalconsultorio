// controllers/doctorController.js
const doctorModel = require('../models/doctorModel');

// Crear un nuevo doctor
const createDoctor = (req, res) => {
  const doctorData = req.body;

  doctorModel.createDoctor(doctorData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creando el doctor', error: err });
    }
    res.status(201).json({ message: 'Doctor creado con éxito', doctorId: results.insertId });
  });
};

// Obtener un doctor por ID
const getDoctorById = (req, res) => {
  const { id } = req.params;

  doctorModel.getDoctorById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo el doctor', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Doctor no encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Actualizar un doctor
const updateDoctor = (req, res) => {
  const { id } = req.params;
  const doctorData = req.body;

  doctorModel.updateDoctor(id, doctorData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error actualizando el doctor', error: err });
    }
    res.status(200).json({ message: 'Doctor actualizado con éxito' });
  });
};

// Eliminar un doctor
const deleteDoctor = (req, res) => {
  const { id } = req.params;

  doctorModel.deleteDoctor(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error eliminando el doctor', error: err });
    }
    res.status(200).json({ message: 'Doctor eliminado con éxito' });
  });
};

module.exports = {
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};