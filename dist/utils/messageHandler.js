"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuccessMessage = exports.getErrorMessage = exports.TYPES = void 0;
exports.TYPES = {
    NOT_FOUND: "not-found",
    FILE_READ: "file-read",
    FILE_WRITE: "file-write",
    PARSE: "parse-json",
    STRINGIFY: "stringify-data",
    REQUIRED: "required",
    VSCODE: "vscode",
    DUPLICATE: "duplicate",
    DOT_GIT: ".git",
    ADD: "add",
    UPDATE: "update",
    REMOVE: "remove",
    ALL: "all",
    LAST: "last",
    EMPTY: "empty",
    INIT: "init",
    RESET: "reset",
    REDIRECT: "redirect",
    MATCH: "match",
    ABORT: "abort",
};
const getErrorMessage = (type, field) => {
    switch (type) {
        case exports.TYPES.FILE_READ:
            return `Failed to read the data from the file!`;
        case exports.TYPES.FILE_WRITE:
            return `Failed to write the data into the file!`;
        case exports.TYPES.PARSE:
            return `Faild to parse json data!`;
        case exports.TYPES.STRINGIFY:
            return `Faild to stringify data!`;
        case exports.TYPES.REQUIRED:
            return `${field} required!`;
        case exports.TYPES.UPDATE:
            return `The new ${field} and old ${field} are similar!`;
        case exports.TYPES.NOT_FOUND:
            return `The ${field} not found!`;
        case exports.TYPES.INIT:
            return `Data has not been initialized yet!`;
        case exports.TYPES.VSCODE:
            return `Failed to open VS Code`;
        case exports.TYPES.EMPTY:
            return `No ${field} stored yet!`;
        case exports.TYPES.DUPLICATE:
            return `There is already an existing ${field} repository!`;
        case exports.TYPES.DOT_GIT:
            return `The path is not a repository!`;
        case exports.TYPES.MATCH:
            return `The repository name doesn't match the old one!`;
        case exports.TYPES.ABORT:
            return `The prompt session is aborted!`;
        default:
            return "Unknown error!";
    }
};
exports.getErrorMessage = getErrorMessage;
const getSuccessMessage = (type, field) => {
    switch (type) {
        case exports.TYPES.FILE_READ:
            return `Success to read the data from the file!`;
        case exports.TYPES.FILE_WRITE:
            return `Success to write the data into the file!`;
        case exports.TYPES.PARSE:
            return `Success to parse json data!`;
        case exports.TYPES.STRINGIFY:
            return `Success to stringify data!`;
        case exports.TYPES.REMOVE:
            return `The repository has been removed successfully`;
        case exports.TYPES.ADD:
            return `${field} added to Switchy Successfully!`;
        case exports.TYPES.UPDATE:
            return `${field} is updated Successfully!`;
        case exports.TYPES.ALL:
            return `Switchy stored repositories:`;
        case exports.TYPES.VSCODE:
            return `Path Opened in VS Code Successfully!`;
        case exports.TYPES.INIT:
            return `The data has been initialized successfully!`;
        case exports.TYPES.RESET:
            return `Switchy is cleared successfully!`;
        case exports.TYPES.LAST:
            return "The last repository opened is :";
        case exports.TYPES.REDIRECT:
            return `The repository ${field} is opened successfully!`;
        case exports.TYPES.DOT_GIT:
            return `Repository Info:`;
        default:
            return "Success!";
    }
};
exports.getSuccessMessage = getSuccessMessage;
//# sourceMappingURL=messageHandler.js.map