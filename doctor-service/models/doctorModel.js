// models/doctorModel.js
const db = require('../config/db');

// Crear un nuevo doctor
const createDoctor = (doctorData, callback) => {
  const { especializacion, nombreDoctor, direccion, tarifaDoctor, telefono, emailDoctor, contraseña } = doctorData;
  const query = `INSERT INTO doctores (especializacion, nombreDoctor, direccion, tarifaDoctor, telefono, emailDoctor, contraseña) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [especializacion, nombreDoctor, direccion, tarifaDoctor, telefono, emailDoctor, contraseña], callback);
};

// Obtener un doctor por ID
const getDoctorById = (id, callback) => {
  const query = 'SELECT * FROM doctores WHERE id = ?';
  db.query(query, [id], callback);
};

// Actualizar un doctor
const updateDoctor = (id, doctorData, callback) => {
  const { especializacion, nombreDoctor, direccion, tarifaDoctor, telefono, emailDoctor, contraseña } = doctorData;
  const query = `UPDATE doctores SET especializacion = ?, nombreDoctor = ?, direccion = ?, tarifaDoctor = ?, telefono = ?, 
                 emailDoctor = ?, contraseña = ? WHERE id = ?`;

  db.query(query, [especializacion, nombreDoctor, direccion, tarifaDoctor, telefono, emailDoctor, contraseña, id], callback);
};

// Eliminar un doctor
const deleteDoctor = (id, callback) => {
  const query = 'DELETE FROM doctores WHERE id = ?';
  db.query(query, [id], callback);
};

module.exports = {
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};