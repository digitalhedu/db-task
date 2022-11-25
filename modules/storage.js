const multer = require("multer");
const path = require("path");
const fs = require("fs");
const filename = (req, file, cb) => {
  let newFile = file.fieldname;
  newFile += "-";
  newFile += Date.now();
  newFile += path.extname(file.originalname);
  cb(null, newFile);
};

const destination = (req, file, cb) => {
  let folder = path.resolve(__dirname, "../uploads", file.fieldname);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  return cb(null, folder);
};
const storage = multer.diskStorage({ filename, destination });

module.exports = storage;
