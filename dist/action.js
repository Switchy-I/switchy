"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const commands_1 = require("./commands");
const utils_1 = require("./utils");
const log_1 = require("./models/log");
class Action {
    static initAction = () => {
        (0, commands_1.init)();
        return (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.INIT)));
    };
    static resetAction = () => {
        (0, commands_1.reset)();
        return (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.RESET)));
    };
    static addAction = (path) => {
        if (!path) {
            (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.REQUIRED, `The repository path`)));
            return utils_1.TAGS.MISSING;
        }
        if (!(0, utils_1.pathIsExist)(path)) {
            (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.NOT_FOUND, "repository path is")));
            return utils_1.TAGS.DOES_NOT_EXIST;
        }
        (async () => {
            let response;
            if (os_1.default.platform() === "linux" || os_1.default.platform() === "darwin") {
                response = await utils_1.RunScript.dotGitIsExist(path);
            }
            else {
                response = await utils_1.RunScript.dotGitIsExistPowerShell(path);
            }
            if (response === "false") {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.DOT_GIT)));
                return utils_1.TAGS.NOT_GIT_REPO;
            }
            const message = (0, commands_1.add)(path);
            const name = (0, utils_1.getName)(path);
            if (message.tag === utils_1.TAGS.DUPLICATED) {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.DUPLICATE, `{${name}}`)));
            }
            else {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.ADD, `The Repository ${name}`), message.repository));
            }
            return message.tag;
        })();
    };
    static lastAction = () => {
        const name = (0, commands_1.last)();
        (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.LAST), name));
    };
    static listAction = () => {
        const repositories = (0, commands_1.list)();
        if (repositories === utils_1.TAGS.EMPTY) {
            return (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getErrorMessage)(utils_1.TYPES.EMPTY, "repositories")));
        }
        else
            return (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.ALL), repositories));
    };
    static redirectAction = (repoName) => {
        const message = (0, commands_1.redirect)(repoName);
        (0, utils_1.logger)(new log_1.Log(message === utils_1.TAGS.DOES_NOT_EXIST ? utils_1.STATUS.FAILED : utils_1.STATUS.SUCCESS, message === utils_1.TAGS.DOES_NOT_EXIST
            ? (0, utils_1.getErrorMessage)(utils_1.TYPES.NOT_FOUND, `repository {${repoName}} is`)
            : (0, utils_1.getSuccessMessage)(utils_1.TYPES.REDIRECT, repoName)));
        return message;
    };
    static searchAction = (name) => {
        const repository = (0, commands_1.search)(name);
        if (repository === utils_1.TAGS.DOES_NOT_EXIST) {
            (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.NOT_FOUND, `repository ${name} is`)));
            return repository;
        }
        else {
            (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.DOT_GIT), repository));
            return utils_1.TAGS.EXIST;
        }
    };
    static removeAction = (name) => {
        const message = (0, commands_1.remove)(name);
        (0, utils_1.logger)(new log_1.Log(message !== utils_1.TAGS.REMOVED ? utils_1.STATUS.FAILED : utils_1.STATUS.SUCCESS, message !== utils_1.TAGS.REMOVED
            ? (0, utils_1.getErrorMessage)(utils_1.TYPES.NOT_FOUND, `repository ${name} is`)
            : (0, utils_1.getSuccessMessage)(utils_1.TYPES.REMOVE)));
        return message;
    };
    static updateAction = (name, path) => {
        if (!name || !path) {
            (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.REQUIRED, "Repository name and path are")));
            return utils_1.TAGS.MISSING;
        }
        if (!(0, utils_1.pathIsExist)(path)) {
            console.log("here");
            (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.NOT_FOUND, "Repository path is")));
            return utils_1.TAGS.DOES_NOT_EXIST;
        }
        (async () => {
            let response;
            if (os_1.default.platform() === "linux" || os_1.default.platform() === "darwin") {
                response = await utils_1.RunScript.dotGitIsExist(path);
            }
            else {
                response = await utils_1.RunScript.dotGitIsExistPowerShell(path);
            }
            if (response === "false") {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.DOT_GIT)));
                return utils_1.TAGS.NOT_GIT_REPO;
            }
            const message = (0, commands_1.update)(name, path);
            if (message === utils_1.TAGS.NO_MATCH) {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.MATCH)));
            }
            else if (message === utils_1.TAGS.DOES_NOT_EXIST) {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.NOT_FOUND, `repository ${name} is`)));
            }
            else if (message === utils_1.TAGS.DUPLICATED) {
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.FAILED, (0, utils_1.getErrorMessage)(utils_1.TYPES.UPDATE, "path")));
            }
            else {
                const repository = (0, commands_1.search)(`${name}`);
                (0, utils_1.logger)(new log_1.Log(utils_1.STATUS.SUCCESS, (0, utils_1.getSuccessMessage)(utils_1.TYPES.UPDATE, `{${name}} repository`), repository));
            }
            return message;
        })();
    };
}
exports.default = Action;
//# sourceMappingURL=action.js.map