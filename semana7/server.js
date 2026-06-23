const express = require('express');
const app = express();

app.use(express.json());

let reportes = [
    { id: 1, problema: "Luz dañada" },
    { id: 2, problema: "Basura acumulada" }
];

// GET /reportes
app.get('/reportes', (req, res) => {
    res.json(reportes);
});

// POST /reportes
app.post('/reportes', (req, res) => {
    const nuevo = req.body;

    reportes.push(nuevo);

    res.json({
        mensaje: "Reporte registrado",
        data: nuevo
    });
});

// servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});