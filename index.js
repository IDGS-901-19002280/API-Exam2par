const express = require('express');
const app = express();
const productos = require('./productos.json'); // Asegúrate de tener un archivo JSON con tus productos

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
