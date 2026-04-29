import { Repository } from "../models/repository";
import {
  FileOperator,
  JsonOperator,
  getDataPath,
  getName,
  TAGS,
} from "../utils/index";

export const add = (path: string) => {
  const name = getName(path);
  const repository = new Repository(
    name,
    path,
    new Date(Date.now()).toUTCString(),
  );

  const filePath = getDataPath();
  console.log(filePath);
  const data = FileOperator.readFromFile(filePath);

  let parsedData = JsonOperator.parsingJsonData(data);

  const result = parsedData["repositories"].find(
    (repo: Repository) => repo.name === repository.name,
  );

  if (result) {
    return { tag: TAGS.DUPLICATED };
  }

  parsedData["repositories"].push(repository);
  parsedData = JsonOperator.stringDataToWriteInJson(parsedData);
  FileOperator.writeToFile(getDataPath(), parsedData);

  return { tag: TAGS.ADDED, repository };
};

