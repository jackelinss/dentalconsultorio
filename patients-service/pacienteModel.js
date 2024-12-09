const db = require('./db');

// Crear un nuevo paciente
const createPatient = (patientData, callback) => {
  const { idDoctor, nombrePaciente, telefonoPaciente, emailPaciente, generoPaciente, direccionPaciente, edadPaciente, historialMedico } = patientData;
  const query = `INSERT INTO pacientes (idDoctor, nombrePaciente, telefonoPaciente, emailPaciente, generoPaciente, direccionPaciente, edadPaciente, historialMedico) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [idDoctor, nombrePaciente, telefonoPaciente, emailPaciente, generoPaciente, direccionPaciente, edadPaciente, historialMedico], callback);
};

// Obtener un paciente por ID
const getPatientById = (id, callback) => {
  const query = 'SELECT * FROM pacientes WHERE id = ?';
  db.query(query, [id], callback);
};

// Obtener todos los pacientes
const getAllPatients = (callback) => {
  const query = 'SELECT * FROM pacientes';
  db.query(query, callback);
};

// Actualizar un paciente
const updatePatient = (id, patientData, callback) => {
  const { idDoctor, nombrePaciente, telefonoPaciente, emailPaciente, generoPaciente, direccionPaciente, edadPaciente, historialMedico } = patientData;
  const query = `UPDATE pacientes SET idDoctor = ?, nombrePaciente = ?, telefonoPaciente = ?, emailPaciente = ?, generoPaciente = ?, direccionPaciente = ?, edadPaciente = ?, historialMedico = ? 
                 WHERE id = ?`;

  db.query(query, [idDoctor, nombrePaciente, telefonoPaciente, emailPaciente, generoPaciente, direccionPaciente, edadPaciente, historialMedico, id], callback);
};

// Eliminar un paciente
const deletePatient = (id, callback) => {
  const query = 'DELETE FROM pacientes WHERE id = ?';
  db.query(query, [id], callback);
};

module.exports = {
  createPatient,
  getPatientById,
  getAllPatients,
  updatePatient,
  deletePatient,
};