import {
  FileOperator,
  JsonOperator,
  getDataPath,
  RepoOperator,
  TAGS,
} from "../utils/index";

export const search = (name: string) => {
  // Get the path to the data file
  const path = getDataPath();

  // Read the data file content
  let data: any = FileOperator.readFromFile(path);

  // Parse the file content into a JSON object
  data = JsonOperator.parsingJsonData(data);

  // Find the index of the repository with the given name
  const index = RepoOperator.getRepoIndexByName(data["repositories"], name);

  // If the repository is not found, return "NotExist"
  if (index === -1) {
    return TAGS.DOES_NOT_EXIST;
  }

  // Return the found repository object
  return data["repositories"][index];
};
