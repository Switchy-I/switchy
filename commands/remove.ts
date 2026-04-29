// 1) Node Modules

// 2) User Defined Modules


import {
  FileOperator,
  JsonOperator,
  getDataPath,
  RepoOperator,
  TAGS,
} from"../utils/index"

export const remove = (name: string) => {
  //  first thing ==> read data from file data
  const filePath = getDataPath();
  
  let data: any = FileOperator.readFromFile(filePath);
  // second step parse it
  data = JsonOperator.parsingJsonData(data);
  
  if (data["lastOpen"] === data["repositories"].name) {
    data["lastOpen"] = "none";
  }
  // third step delete repo
  let index = RepoOperator.getRepoIndexByName(data["repositories"], name);
    
    // four strigify it
  if (index === -1) {
    return TAGS.DOES_NOT_EXIST;
  } 

  RepoOperator.removeRepoByIndex(data["repositories"], index);
  data = JsonOperator.stringDataToWriteInJson(data);
  FileOperator.writeToFile(filePath, data);
  return TAGS.REMOVED;
};
