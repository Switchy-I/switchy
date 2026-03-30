const { Repository } = require("../models/repository");
const {
  FileOperator,
  JsonOperator,
  getDataPath,
  getName,
  TAGS,
} = require("../utils/index");

const add = (path) => {
  const name = getName(path);
  const repository = new Repository(
    name,
    path,
    new Date(Date.now()).toUTCString()
  );

  const filePath = getDataPath();
  console.log(filePath);
  const data = FileOperator.readFromFile(filePath);

  let parsedData = JsonOperator.parsingJsonData(data);

  const result = parsedData["repositories"].find(
    (repo) => repo.name === repository.name
  );

  if (result) {
    return { tag: TAGS.DUPLICATED };
  }

  parsedData["repositories"].push(repository);
  parsedData = JsonOperator.stringDataToWriteinJson(parsedData);
  FileOperator.writeToFile(getDataPath(), parsedData);

  return { tag: TAGS.ADDED, repository };
};

module.exports = {
  add,
};
