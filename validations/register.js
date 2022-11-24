const validator = require("express-validator");
const { body } = validator;
const models = require("../database/models/index");
const { user } = models;
const username = body("username")
  .notEmpty()
  .withMessage("Can't empty")
  .bail()
  .custom(async (value) => {
    let search = await user.findOne({ username: value });
    if (search) {
      return Promise.reject("username used");
    }
    return true;
  });
const email = body("email")
  .notEmpty()
  .withMessage("Can't empty")
  .bail()
  .custom(async (value) => {
    let search = await user.findOne({ email: value });
    if (search) {
      return Promise.reject("email used");
    }
    return true;
  });
const password = body("password")
  .notEmpty()
  .withMessage("Can't empty")
  .bail()
  .isLength({ min: 4 })
  .withMessage("Can't empty");

module.exports = [username, email, password];
