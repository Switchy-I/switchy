"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunScript = void 0;
const child_process_1 = require("child_process");
const messageHandler_1 = require("../utils/messageHandler");
const pathModule_1 = require("./pathModule");
const logger_1 = require("../utils/logger");
const log_1 = require("../models/log");
class RunScript {
    static openInVSCode = (path) => {
        (0, child_process_1.exec)(`code "${path}"`, (error) => {
            if (error) {
                (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, (0, messageHandler_1.getErrorMessage)(messageHandler_1.TYPES.VSCODE)));
            }
            else {
                (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.SUCCESS, (0, messageHandler_1.getSuccessMessage)(messageHandler_1.TYPES.VSCODE)));
            }
        });
    };
    static initializeData = () => {
        const path = (0, pathModule_1.getPath)("../scripts/init.sh");
        (0, child_process_1.exec)(`bash ${path}`, (error, stdout, stderr) => {
            if (error) {
                (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, error.message));
                return;
            }
            else if (stderr) {
                (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, stderr));
                return;
            }
            (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.SUCCESS, (0, messageHandler_1.getSuccessMessage)(messageHandler_1.TYPES.INIT)));
        });
    };
    static initializeDataPowerShell = () => {
        const path = (0, pathModule_1.getPath)("../scripts/init.ps1");
        (0, child_process_1.exec)(`powershell -ExecutionPolicy Bypass -File ${path}`, (error, stdout, stderr) => {
            if (error) {
                (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, error.message));
                return;
            }
            else if (stderr) {
                (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, stderr));
                return;
            }
            (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.SUCCESS, (0, messageHandler_1.getSuccessMessage)(messageHandler_1.TYPES.INIT)));
        });
    };
    static dotGitIsExist = async (repoPath) => {
        const path = (0, pathModule_1.getPath)("../scripts/dotGitExist.sh");
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(`bash ${path} ${repoPath}`, (error, stdout, stderr) => {
                if (error) {
                    (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, error.message));
                    return resolve(0);
                }
                if (stderr) {
                    (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, stderr));
                    return resolve(0);
                }
                resolve(stdout.trim());
            });
        });
    };
    static dotGitIsExistPowerShell = async (repoPath) => {
        const path = (0, pathModule_1.getPath)("../scripts/dotGitExist.ps1");
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(`powershell -ExecutionPolicy Bypass -File ${path} ${repoPath}`, (error, stdout, stderr) => {
                if (error) {
                    (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, error.message));
                    return resolve(0);
                }
                if (stderr) {
                    (0, logger_1.logger)(new log_1.Log(logger_1.STATUS.FAILED, stderr));
                    return resolve(0);
                }
                resolve(stdout.trim());
            });
        });
    };
}
exports.RunScript = RunScript;
//# sourceMappingURL=runScript.js.map