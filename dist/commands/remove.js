"use strict";
// 1) Node Modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
// 2) User Defined Modules
const index_1 = require("../utils/index");
const remove = (name) => {
    //  first thing ==> read data from file data
    const filePath = (0, index_1.getDataPath)();
    let data = index_1.FileOperator.readFromFile(filePath);
    // second step parse it
    data = index_1.JsonOperator.parsingJsonData(data);
    if (data["lastOpen"] === data["repositories"].name) {
        data["lastOpen"] = "none";
    }
    // third step delete repo
    let index = index_1.RepoOperator.getRepoIndexByName(data["repositories"], name);
    // four strigify it
    if (index === -1) {
        return index_1.TAGS.DOES_NOT_EXIST;
    }
    index_1.RepoOperator.removeRepoByIndex(data["repositories"], index);
    data = index_1.JsonOperator.stringDataToWriteInJson(data);
    index_1.FileOperator.writeToFile(filePath, data);
    return index_1.TAGS.REMOVED;
};
exports.remove = remove;
//# sourceMappingURL=remove.js.map