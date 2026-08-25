"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonOperator = void 0;
const log_1 = require("../models/log");
const logger_1 = require("./logger");
const messageHandler_1 = require("./messageHandler");
class JsonOperator {
    static parsingJsonData = function (data) {
        try {
            const parsedData = JSON.parse(data);
            return parsedData;
        }
        catch (err) {
            (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, (0, messageHandler_1.getErrorMessage)(messageHandler_1.TYPES.PARSE)));
            process.exit(0);
        }
    };
    static stringDataToWriteInJson = function (data) {
        try {
            const stringData = JSON.stringify(data);
            return stringData;
        }
        catch (err) {
            (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, (0, messageHandler_1.getErrorMessage)(messageHandler_1.TYPES.STRINGIFY)));
            process.exit(0);
        }
    };
}
exports.JsonOperator = JsonOperator;
//# sourceMappingURL=jsonOperator.js.map