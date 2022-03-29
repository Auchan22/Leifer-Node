/**
 *Esta función se encarga de devolver un status 404 y un mensaje de error en caso de no encontrar una ruta conocida.
 * @param req - Request o pedido del cliente al servidor.
 * @param res - Resolve o respuesta del servidor al cliente.
 */
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: `No existe la ruta ${req.path}` });
};

module.exports = unknownEndpoint;
