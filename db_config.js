const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',     // ou o endereço do seu servidor SQL
  user: '****',
  password: '*****',
  database: 'cadastro'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Conectado ao banco de dados!");
});

module.exports = connection;
