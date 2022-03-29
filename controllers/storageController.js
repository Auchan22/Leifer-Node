const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getFiles = async (req, res) => {
  const data = await storageModel.find({});

  res.send({ data });
};

/**
 * Obtener un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getFile = async (req, res) => {
  //   const data = await storageModel.findById(id);
  //   res.send({ data });
};

/**
 * Crear un registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createFile = async (req, res) => {
  const { body, file } = req;
  console.log(body);

  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);

  if (!body) {
    res.status(400).send({ error: "No se creo la cancion" });
  } else {
    res.send({ msg: "Archivo Cargado", data });
  }
};

/**
 * Eliminar un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteFile = (req, res) => {};
/**
 * Actualizar un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateFile = (req, res) => {};

module.exports = { getFiles, getFile, createFile, deleteFile, updateFile };
