const validator = require("express-validator");
const { body } = validator;
const models = require("../database/models/index");
const { user } = models;
const bcrypt = require("bcrypt");
const email = body("email")
  .notEmpty()
  .withMessage("Can't empty")
  .bail()
  .custom(async (value) => {
    let search = await user.findOne({ email: value });
    if (!search) {
      return Promise.reject("email not found");
    }
    return true;
  });
const password = body("password")
  .notEmpty()
  .withMessage("Can't empty")
  .bail()
  .isLength({ min: 4 })
  .withMessage("Can't empty")
  .bail()
  .custom(async (value, { req }) => {
    let search = await user.findOne({ email: value });
    if (!search) {
      return Promise.reject("email not found");
    }
    if (!bcrypt.compareSync(value, search.password)) {
      return Promise.reject("password incorrect");
    }
    return true;
  });

module.exports = [email, password];
