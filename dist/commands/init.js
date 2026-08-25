"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const index_1 = require("../utils/index");
const init = () => {
    const path = (0, index_1.getDataPath)();
    let dataStructure = {
        lastOpen: "none",
        repositories: [],
    };
    dataStructure = index_1.JsonOperator.stringDataToWriteInJson(dataStructure);
    index_1.FileOperator.writeToFile(path, dataStructure);
};
exports.init = init;
//# sourceMappingURL=init.js.map