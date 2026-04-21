import { Repository } from '../models/repository';
import  {
  FileOperator,
  JsonOperator,
  getDataPath
} from'../utils/index'

export const last = () => {
  const data = FileOperator.readFromFile(getDataPath());
  const parsedData: Repository = JsonOperator.parsingJsonData(data);

  return parsedData["lastOpen"];
};


