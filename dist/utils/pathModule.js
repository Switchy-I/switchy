"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.getPath = exports.getDataPath = void 0;
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const config_1 = __importDefault(require("../config/config"));
const getDataPath = function () {
    return path_1.default.join(__dirname, `../${config_1.default.DIRECTORY_DATA}/${config_1.default.REPOSITORY_NAME}.json`);
};
exports.getDataPath = getDataPath;
const getPath = function (filePath) {
    return path_1.default.join(__dirname, filePath);
};
exports.getPath = getPath;
const getName = function (path) {
    const currentOS = os_1.default.type();
    const condition = currentOS === `Linux` || currentOS === `Darwin`;
    const index = path.lastIndexOf(condition ? "/" : `\\`) + 1;
    const name = path.substring(index);
    return name;
};
exports.getName = getName;
//# sourceMappingURL=pathModule.js.map