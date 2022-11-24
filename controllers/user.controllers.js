const user = require("../database/models/User");
const validator = require("express-validator");
const bcrypt = require("bcrypt");
const { validationResult } = validator;
const methods = {};
methods.login = (req, res) => res.render("login");
methods.register = (req, res) => res.render("register");
methods.access = async (req, res) => {
  let errors = validationResult(req);
  let hasErrors = !errors.isEmpty();
  if (hasErrors) {
    return res.send(errors.mapped());
  }
  let result = await user.findOne({ email: req.body.email });
  req.session.user = result;
  if (req.body.remember) {
    res.cookie("user", result.email, { maxAge: 1000 * 60 * 60 * 24 });
  }
  return res.send("access");
};
methods.save = async (req, res) => {
  let errors = validationResult(req);
  let hasErrors = !errors.isEmpty();
  if (hasErrors) {
    return res.send(errors.mapped());
  }
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  req.body.isAdmin = String(req.body.email).includes("@admin");
  req.body.avatar =
    req.files && req.files.length > 0 ? req.files[0].filename : null;
  await user.create(req.body);
  return res.redirect("/");
};

module.exports = methods;
