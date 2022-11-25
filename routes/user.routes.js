const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controllers");
const { login, register, access, save, logout } = controller;
const multer = require("multer");

const storage = require("../modules/storage");
const upload = multer(storage);
const validationLogin = require("../validations/login");
const validationRegister = require("../validations/register");
router.get("/", login);
router.get("/register", register);
router.get("/logout", logout);
router.post("/access", [validationLogin], access);
router.post("/save", [upload.any(), validationRegister], save);

module.exports = router;
