const mongoose = require("mongoose");

const storageScheme = new mongoose.Schema(
  {
    //Declaramos la estructura de nuestro objeto
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, //CreatedAt, updatedAt
    versionKey: false,
  },
);

module.exports = mongoose.model("storage", storageScheme);
