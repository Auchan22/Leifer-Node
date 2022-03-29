const express = require("express");
const storageRouter = express.Router();
const uploadMiddleware = require("../utils/handleStorage");

const {
  getFiles,
  createFile,
  getFile,
  updateFile,
  deleteFile,
} = require("../controllers/storageController");

storageRouter.get("/", getFiles);
storageRouter.get("/:id", getFile);
storageRouter.post("/", uploadMiddleware.single("myfile"), createFile);
storageRouter.put("/:id", updateFile);
storageRouter.delete("/:id", deleteFile);

module.exports = storageRouter;
