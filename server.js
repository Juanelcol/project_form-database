const express = require('express');
const cors = require('cors');
const path = require('path');
const connection = require('./db_config');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.post('/insert', (req, res) => {
  const { name, rg, city } = req.body;

  if (!name || !rg || !city) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  const sql = "INSERT INTO usuarios (name, rg, city) VALUES (?, ?, ?)";
  connection.query(sql, [name, rg, city], (error, results) => {
    if (error) {
      console.error("Erro ao inserir dados:", error);
      return res.status(500).json({ message: "Erro ao inserir os dados." });
    }
    res.status(200).json({ message: "Dados inseridos com sucesso!" });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
