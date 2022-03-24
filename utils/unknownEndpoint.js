const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: `No existe la ruta ${req.path}` });
};

module.exports = unknownEndpoint;
