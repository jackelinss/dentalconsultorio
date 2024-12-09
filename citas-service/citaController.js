// controllers/citaController.js
const citaModel = require('./citaModel');

// Crear una nueva cita
const createCita = (req, res) => {
  const citaData = req.body;

  if (!citaData.especializacionDoctor || !citaData.idDoctor || !citaData.nombreUsuario || !citaData.tarifaConsulta || !citaData.fechaCita || !citaData.horaCita) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  citaModel.createCita(citaData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creando la cita', error: err });
    }
    res.status(201).json({ message: 'Cita creada con éxito', citaId: results.insertId });
  });
};

// Obtener una cita por ID
const getCitaById = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  citaModel.getCitaById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo la cita', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }
    res.status(200).json(results[0]);
  });
};

// Obtener todas las citas
const getAllCitas = (req, res) => {
  citaModel.getAllCitas((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo las citas', error: err });
    }
    res.status(200).json(results);
  });
};

// Actualizar una cita
const updateCita = (req, res) => {
  const { id } = req.params;
  const citaData = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  citaModel.updateCita(id, citaData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error actualizando la cita', error: err });
    }
    res.status(200).json({ message: 'Cita actualizada con éxito' });
  });
};

// Eliminar una cita
const deleteCita = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  citaModel.deleteCita(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error eliminando la cita', error: err });
    }
    res.status(200).json({ message: 'Cita eliminada con éxito' });
  });
};

module.exports = {
  createCita,
  getCitaById,
  getAllCitas,
  updateCita,
  deleteCita,
};