"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const repository_1 = require("../models/repository");
const index_1 = require("../utils/index");
const add = (path) => {
    const name = (0, index_1.getName)(path);
    const repository = new repository_1.Repository(name, path, new Date(Date.now()).toUTCString());
    const filePath = (0, index_1.getDataPath)();
    console.log(filePath);
    const data = index_1.FileOperator.readFromFile(filePath);
    let parsedData = index_1.JsonOperator.parsingJsonData(data);
    const result = parsedData["repositories"].find((repo) => repo.name === repository.name);
    if (result) {
        return { tag: index_1.TAGS.DUPLICATED };
    }
    parsedData["repositories"].push(repository);
    parsedData = index_1.JsonOperator.stringDataToWriteInJson(parsedData);
    index_1.FileOperator.writeToFile((0, index_1.getDataPath)(), parsedData);
    return { tag: index_1.TAGS.ADDED, repository };
};
exports.add = add;
//# sourceMappingURL=add.js.map