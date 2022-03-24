const mongo = require("mongoose");

//Creando función para conectarnos a la DB

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;

  //Le decimos a mongo que se conecte a la base de datos.
  mongo.connect(
    DB_URI,
    {
      useNewUrlParse: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      try {
        console.log("Conectado Correctamente a la DB");
      } catch (err) {
        console.log(`No se pudo conectar a la DB:`);
        res.status(400).send({
          errMessage: "No se pudo conectar a la DB",
          err,
        });
      }
    },
  );
};

module.exports = dbConnect;
