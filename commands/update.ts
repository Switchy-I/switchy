import { Repository } from "../models/repository";
import { FileOperator, JsonOperator, TAGS, getDataPath } from "../utils/index";
import { getName } from "../utils/pathModule";

export const update = (name: string, path: string) => {
  const repoName = getName(path);

  if (repoName !== name) {
    return TAGS.NO_MATCH;
  }

  const data = FileOperator.readFromFile(getDataPath());
  const parsedData = JsonOperator.parsingJsonData(data);

  const [repository] = parsedData["repositories"].filter(
    (repo: Repository) => repo.name === name,
  );

  if (!repository) {
    return TAGS.DOES_NOT_EXIST;
  }

  const index = parsedData["repositories"].indexOf(repository);

  if (path === repository.path) {
    return TAGS.DUPLICATED;
  }

  repository.path = path;

  parsedData["repositories"][index] = repository;
  const stringData = JsonOperator.stringDataToWriteInJson(parsedData);
  FileOperator.writeToFile(getDataPath(), stringData);

  return TAGS.UPDATED;
};
