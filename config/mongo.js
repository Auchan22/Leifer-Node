const mongo = require("mongoose");

//Creando función para conectarnos a la DB
require("dotenv").config();

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;

  //Le decimos a mongo que se conecte a la base de datos.
  mongo
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado Correctamente a la DB"))
    .catch((err) => console.log(`No se pudo conectar a la DB:`, err));
};

module.exports = dbConnect;
