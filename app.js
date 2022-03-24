require("dotenv").config();

const express = require("express");
const cors = require("cors");

const dbConnect = require("./config/mongo");
const unknownEndpoint = require("./utils/unknownEndpoint");

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas

// app.get("/", (req, res) => {
//   res.send("<h1>Hola Mundo</h1>");
// });

app.use("/api", require("./routes"));
app.use(unknownEndpoint);

//Iniciando Servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//Invocando la conexion a la DB
dbConnect();
