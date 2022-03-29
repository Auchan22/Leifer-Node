const express = require("express");
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracksController");
const trackRouter = express.Router(); //Funcion que nos permite manejar las rutas de nuestra app

trackRouter.get("/", getItems);
trackRouter.get("/:id", getItem);
trackRouter.post("/", createItem);
trackRouter.put("/:id", updateItem);
trackRouter.delete("/:id", deleteItem);

module.exports = trackRouter;
