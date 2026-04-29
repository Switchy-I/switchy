import  {
  FileOperator,
  JsonOperator,
  getDataPath,
  TAGS,
} from "../utils/index";

export const list = () => {
  const data = FileOperator.readFromFile(getDataPath());
  if (!data) {
    return TAGS.EMPTY;
  }
  const parsedData = JsonOperator.parsingJsonData(data);

  return parsedData["repositories"];
};
