const mysql = require('mysql2');

// Crear conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto si usas un usuario diferente
  password: '', // Cambia esto si usas una contraseña
  database: 'proyecto1', // Base de datos que creaste
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = db;