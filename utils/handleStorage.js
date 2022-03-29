const multer = require("multer");

//Le decimos a multer que cree un "disco de almacenamiento" en nuestro local development
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const pathStorage = `${__dirname}/../storage`;
    //Esta funcion hace referencia al directorio en donde se van a almacenar los archivos
    callback(null, pathStorage);
  },
  filename: function (req, file, callback) {
    const ext = file.originalname.split(".").pop();

    const filename = `file-${Date.now()}.${ext}`;
    callback(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
