require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

//Middlewares
app.use(cors());

//Rutas
app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

//Iniciando Servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
