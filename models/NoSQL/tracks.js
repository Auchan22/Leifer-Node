const mongoose = require("mongoose");

const tracksScheme = new mongoose.Schema(
  {
    //Declaramos la estructura de nuestro objeto
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nacionality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //CreatedAt, updatedAt
    versionKey: false,
  },
);

module.exports = mongoose.model("tracks", tracksScheme);
