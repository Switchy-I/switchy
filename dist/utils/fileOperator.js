"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOperator = void 0;
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("../config/config"));
const log_1 = require("../models/log");
const logger_1 = require("./logger");
const messageHandler_1 = require("./messageHandler");
const pathModule_1 = require("./pathModule");
class FileOperator {
    static readFromFile = function (file) {
        try {
            const data = fs_1.default.readFileSync(file, "utf-8");
            return data;
        }
        catch (err) {
            (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, (0, messageHandler_1.getErrorMessage)(messageHandler_1.TYPES.FILE_READ)));
            process.exit(0);
        }
    };
    static writeToFile = function (file, data) {
        try {
            const dirPath = (0, pathModule_1.getPath)(`../${config_1.default.DIRECTORY_DATA}`);
            if (!fs_1.default.existsSync(dirPath)) {
                fs_1.default.mkdirSync(dirPath);
            }
            fs_1.default.writeFileSync(file, data, "utf-8");
        }
        catch (err) {
            (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, (0, messageHandler_1.getErrorMessage)(messageHandler_1.TYPES.FILE_WRITE)));
            process.exit(0);
        }
    };
}
exports.FileOperator = FileOperator;
//# sourceMappingURL=fileOperator.js.map