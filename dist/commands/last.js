"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
const index_1 = require("../utils/index");
const last = () => {
    const data = index_1.FileOperator.readFromFile((0, index_1.getDataPath)());
    const parsedData = index_1.JsonOperator.parsingJsonData(data);
    return parsedData["lastOpen"];
};
exports.last = last;
//# sourceMappingURL=last.js.map