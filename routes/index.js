const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //Nos va dar la ruta absoluta de donde se encuentra el archivo; la direccion en onde se encuentra en tu maquina

/**
 * Esta función nos permite remover las extensiones de nuestros archivos, para poder obtener solamente el nombre de nuestro archivo.
 *
 * @param filename - Recibe como parametro el nombre del archivo con su extension.
 */
const removeExtension = (filename) => {
  return filename.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  //Escaneamos todos los archivos que se encuentra en el directorio "Routes"
  //Luego, lo filtramos para poder remover la extension con la funcion removeExtension()
  const name = removeExtension(file);
  if (name !== "index") {
    // console.log(`Cargando ruta ${name}`);

    //Si el name es distinto a index, cargara por medio del router.use(param1, param2), la ruta correspondiente con su middleware correspondiente
    //→ param1: url o path del archivo en nuestro navegador; name nos sirve para asignarle un nombre.
    //→ param2: middleware o funcion, que va a buscar en el path correspondiente, el archivo pedido, y cargara el middleware que este lleva adentro

    router.use(`/${name}`, require(`./${file}`));
  }
});

router.use((req, res) => {
  res.send("<h1>Mostrando desde api/index</h1>");
});
// console.log(array);

module.exports = router;
