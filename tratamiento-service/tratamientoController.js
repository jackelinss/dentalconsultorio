// controllers/tratamientoController.js
const tratamientoModel = require('./tratamientoModel');

// Crear un nuevo tratamiento
const createTratamiento = (req, res) => {
  const tratamientoData = req.body;

  if (!tratamientoData.tratamiento || !tratamientoData.costo) {
    return res.status(400).json({ message: 'El tratamiento y el costo son requeridos' });
  }

  tratamientoModel.createTratamiento(tratamientoData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creando el tratamiento', error: err });
    }
    res.status(201).json({ message: 'Tratamiento creado con éxito', tratamientoId: results.insertId });
  });
};

// Obtener un tratamiento por ID
const getTratamientoById = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  tratamientoModel.getTratamientoById(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo el tratamiento', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Tratamiento no encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Obtener todos los tratamientos
const getAllTratamientos = (req, res) => {
  tratamientoModel.getAllTratamientos((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error obteniendo los tratamientos', error: err });
    }
    res.status(200).json(results);
  });
};

// Actualizar un tratamiento
const updateTratamiento = (req, res) => {
  const { id } = req.params;
  const tratamientoData = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  tratamientoModel.updateTratamiento(id, tratamientoData, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error actualizando el tratamiento', error: err });
    }
    res.status(200).json({ message: 'Tratamiento actualizado con éxito' });
  });
};

// Eliminar un tratamiento
const deleteTratamiento = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'El ID debe ser un número' });
  }

  tratamientoModel.deleteTratamiento(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error eliminando el tratamiento', error: err });
    }
    res.status(200).json({ message: 'Tratamiento eliminado con éxito' });
  });
};

module.exports = {
  createTratamiento,
  getTratamientoById,
  getAllTratamientos,
  updateTratamiento,
  deleteTratamiento,
};