const mysql = require('mysql2');

// Crear una conexión con la base de datos MySQL
const pool = mysql.createPool({
  host: 'localhost',        // Dirección del servidor MySQL
  user: 'root',         // Usuario de MySQL
  password: '', 
  port:'3306',       // Contraseña del usuario
  database: 'trece1',        // Nombre de la base de datos
  waitForConnections: true, // Esperar por conexiones disponibles
  connectionLimit: 10,      // Número máximo de conexiones
  queueLimit: 0             // Número máximo de consultas en cola
});

// Exportar el pool de conexiones
module.exports = pool;