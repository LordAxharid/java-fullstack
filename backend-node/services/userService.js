const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'technical',
    password: 'dbpostgres',
    port: 5432
});

// Obtener todos los usuarios
const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM app_user');
    return result.rows;
};


module.exports = {
    getAllUsers,
};
