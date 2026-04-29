import {
  FileOperator,
  JsonOperator,
  getDataPath
} from'../utils/index' 

export const init = () => {
  const path = getDataPath();

  let dataStructure = {
    lastOpen: "none", 
    repositories: [],  
  } as unknown as string;

  dataStructure = JsonOperator.stringDataToWriteInJson(dataStructure)

  FileOperator.writeToFile(path, dataStructure);
};
