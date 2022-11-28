const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controllers");
const { login, register, access, save, logout } = controller;
const multer = require("multer");
const storage = require("../modules/storage");
const upload = multer({ storage: storage });
const validationLogin = require("../validations/login");
const validationRegister = require("../validations/register");
router.get("/", login);
router.get("/register", register);
router.get("/logout", logout);
router.post("/save", [upload.any(), validationRegister], save);
router.post("/access", [validationLogin], access);

module.exports = router;
