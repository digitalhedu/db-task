const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controllers");
const { login, register, access, save, logout } = controller;
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const filename = (req, file, cb) =>
  cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
const destination = (req, file, cb) => {
  let folder = path.resolve(__dirname, "../upload");
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  return cb(null, folder);
};
const upload = multer(multer.diskStorage({ filename, destination }));
const validationLogin = require("../validations/login");
const validationRegister = require("../validations/register");
router.get("/", login);
router.get("/register", register);
router.get("/logout", logout);
router.post("/access", [validationLogin], access);
router.post("/save", [upload.any(), validationRegister], save);

module.exports = router;
