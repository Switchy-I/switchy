const { TAGS } = require("./tags");
const { FileOperator } = require("../utils/fileOperator");

const fs = require("fs");
const pathIsExist = function (path) {
  return fs.existsSync(path);
};

const fileIsEmpty = function (path) {
  let data = FileOperator.readFromFile(path);

  if (
    data === null ||
    data === "" ||
    (typeof data === "object" && Object.keys(data).length === 0)
  ) {
    return TAGS.EMPTY;
  }

  return TAGS.FULL;
};

module.exports = {
  pathIsExist,
  fileIsEmpty,
};
