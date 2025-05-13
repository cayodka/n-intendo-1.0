const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/images', express.static(path.join(__dirname, 'images')));


app.get('/jogos', (req, res) => {
  const dbPath = path.join(__dirname, 'database.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o banco de dados:', err);
      return res.status(500).json({ error: 'Erro ao carregar os jogos.' });
    }
    const jogos = JSON.parse(data);
    res.json(jogos);
  });
});

app.get('/console', (req, res) => {
  const dbPath = path.join(__dirname, 'databaseconsole.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o banco de dados de consoles:', err);
      return res.status(500).json({ error: 'Erro ao carregar os consoles.' });
    }
    const consoles = JSON.parse(data);
    res.json(consoles);  
  });
});

app.get('/casacos', (req, res) => {
  const dbPath = path.join(__dirname, 'databasecasacos.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o banco de dados de consoles:', err);
      return res.status(500).json({ error: 'Erro ao carregar os consoles.' });
    }
    const consoles = JSON.parse(data);
    res.json(consoles);  
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
