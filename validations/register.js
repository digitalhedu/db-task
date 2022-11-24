const validator = require("express-validator");
const { body } = validator;
const { user } = require("../database/models");
const username = body("username")
  .notEmpty()
  .withMessage("Can't empty")
  .bail()
  .custom(async (value) => {
    let search = await user.findOne({ where: { username: value } });
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
    let search = await user.findOne({ where: { email: value } });
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
  .withMessage("Min 4 characters")
  .isStrongPassword({
    minLength: 4,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 2,
  })
  .withMessage("Min 4 characters, 1 symbol, 1 Uppercase, 2 numbers");

module.exports = [username, email, password];
