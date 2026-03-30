const {
  FileOperator,
  JsonOperator,
  getDataPath
} = require('../utils/index') 

const init = () => {
  const path = getDataPath();

  let dataStructure = {
    lastOpen: "none", 
    repositories: [],  
  };

  dataStructure = JsonOperator.stringDataToWriteinJson(dataStructure);

  FileOperator.writeToFile(path, dataStructure);
};


module.exports = {
  init,
};
