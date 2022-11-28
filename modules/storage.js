const multer = require("multer");
const path = require("path");
const fs = require("fs");
const filename = (req, file, cb) => {
  let newFile = file.fieldname;
  newFile += "-";
  newFile += Date.now();
  newFile += path.extname(file.originalname);
  return cb(null, newFile);
};

const destination = (req, file, cb) => {
  let folder = path.resolve(__dirname, "../uploads", file.fieldname);
  let exist = fs.existsSync(folder);
  if (!exist) {
    fs.mkdirSync(folder, { recursive: true });
  }
  return cb(null, folder);
};

const storage = multer.diskStorage({
  destination: destination,
  filename: filename,
});

module.exports = storage;
