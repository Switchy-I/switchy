"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileIsEmpty = exports.pathIsExist = exports.expandTilde = void 0;
const tags_1 = require("./tags");
const fileOperator_1 = require("../utils/fileOperator");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const expandTilde = function (inputPath) {
    if (!inputPath)
        return inputPath;
    if (inputPath === "~")
        return os_1.default.homedir();
    if (inputPath.startsWith("~/") || inputPath.startsWith("~\\")) {
        return path_1.default.join(os_1.default.homedir(), inputPath.slice(2));
    }
    return inputPath;
};
exports.expandTilde = expandTilde;
const pathIsExist = function (path) {
    return fs_1.default.existsSync(path);
};
exports.pathIsExist = pathIsExist;
const fileIsEmpty = function (path) {
    let data = fileOperator_1.FileOperator.readFromFile(path);
    if (data === null ||
        data === "" ||
        (typeof data === "object" && Object.keys(data).length === 0)) {
        return tags_1.TAGS.EMPTY;
    }
    return tags_1.TAGS.FULL;
};
exports.fileIsEmpty = fileIsEmpty;
//# sourceMappingURL=validator.js.map