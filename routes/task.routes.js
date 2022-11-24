const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controllers");
const { index, create, storage, change, edit, update, remove } = controller;

router.get("/", index);
router.get("/new", create);
router.post("/storage", storage);
router.post("/edit", edit);
router.put("/change", change);
router.put("/update", update);
router.delete("/remove", remove);
module.exports = router;
