const validator = require("express-validator");
const { body } = validator;

const title = body("title")
  .notEmpty()
  .withMessage("can't empty")
  .bail()
  .isLength({ min: 4 })
  .withMessage("Must min 4 characters")
  .bail()
  .isAlphanumeric()
  .withMessage("can't contain special characters")
  .bail();

const userId = body("userId").notEmpty().withMessage("can't empty").bail();

module.exports = [title, userId];
