"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const index_1 = require("../utils/index");
const pathModule_1 = require("../utils/pathModule");
const update = (name, path) => {
    const repoName = (0, pathModule_1.getName)(path);
    if (repoName !== name) {
        return index_1.TAGS.NO_MATCH;
    }
    const data = index_1.FileOperator.readFromFile((0, index_1.getDataPath)());
    const parsedData = index_1.JsonOperator.parsingJsonData(data);
    const [repository] = parsedData["repositories"].filter((repo) => repo.name === name);
    if (!repository) {
        return index_1.TAGS.DOES_NOT_EXIST;
    }
    const index = parsedData["repositories"].indexOf(repository);
    if (path === repository.path) {
        return index_1.TAGS.DUPLICATED;
    }
    repository.path = path;
    parsedData["repositories"][index] = repository;
    const stringData = index_1.JsonOperator.stringDataToWriteInJson(parsedData);
    index_1.FileOperator.writeToFile((0, index_1.getDataPath)(), stringData);
    return index_1.TAGS.UPDATED;
};
exports.update = update;
//# sourceMappingURL=update.js.map