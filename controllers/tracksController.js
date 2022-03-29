const { tracksModel } = require("../models");

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});

  res.send({ data });
};

/**
 * Obtener un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  const id = Number(req.params.id);
  // const data = await tracksModel.find({
  //   _id: ObjectId(`${id}`),
  // });
};

/**
 * Crear un registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);

  const data = await tracksModel.create(body);

  if (!body) {
    res.status(400).send({ error: "No se creo la cancion" });
  } else {
    res.send({ msg: "Cancion creada correctamente", data });
  }
};

/**
 * Eliminar un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};
/**
 * Actualizar un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, deleteItem, updateItem };
