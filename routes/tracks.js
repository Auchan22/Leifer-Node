const express = require("express");
const trackRouter = express.Router(); //Funcion que nos permite manejar las rutas de nuestra app

trackRouter.get("/", (req, res) => {
  res.send("<h1>Desde tracks</h1>");
});

module.exports = trackRouter;
