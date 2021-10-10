const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-shop',
    password: 'jabuka231'
});

module.exports = pool.promise();