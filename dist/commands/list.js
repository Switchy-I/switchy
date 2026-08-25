"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const index_1 = require("../utils/index");
const list = () => {
    const data = index_1.FileOperator.readFromFile((0, index_1.getDataPath)());
    if (!data) {
        return index_1.TAGS.EMPTY;
    }
    const parsedData = index_1.JsonOperator.parsingJsonData(data);
    return parsedData["repositories"];
};
exports.list = list;
//# sourceMappingURL=list.js.map