"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const index_1 = require("../utils/index");
const search = (name) => {
    // Get the path to the data file
    const path = (0, index_1.getDataPath)();
    // Read the data file content
    let data = index_1.FileOperator.readFromFile(path);
    // Parse the file content into a JSON object
    data = index_1.JsonOperator.parsingJsonData(data);
    // Find the index of the repository with the given name
    const index = index_1.RepoOperator.getRepoIndexByName(data["repositories"], name);
    // If the repository is not found, return "NotExist"
    if (index === -1) {
        return index_1.TAGS.DOES_NOT_EXIST;
    }
    // Return the found repository object
    return data["repositories"][index];
};
exports.search = search;
//# sourceMappingURL=search.js.map