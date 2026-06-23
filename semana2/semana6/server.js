const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ??');
});

app.get('/hola', (req, res) => {
  res.send('Hola Lorena ?? esta es una nueva ruta');
});

app.get('/api', (req, res) => {
  res.json({
    mensaje: 'API funcionando correctamente',
    estado: 'OK'
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});