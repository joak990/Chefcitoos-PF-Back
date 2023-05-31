const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_NOTES = __dirname;

const removeExtension = (fileName) => {
  //TODO example [example, js]
  return fileName.split(".").shift();
};

const a = fs.readdirSync(PATH_NOTES).filter((file) => {
  const name = removeExtension(file);

  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});


module.exports = router;