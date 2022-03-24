const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    //Declaramos la estructura de nuestro objeto
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //CreatedAt, updatedAt
    versionKey: false,
  },
);

module.exports = mongoose.model("users", userScheme);
