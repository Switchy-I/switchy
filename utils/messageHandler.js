const TYPES = {
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
  MATCH: "match"
};

let message;

const getErrorMessage = (type, field) => {
  switch (type) {
    case TYPES.FILE_READ:
      message = `Failed to read the data from the file!`;
      break;
    case TYPES.FILE_WRITE:
      message = `Failed to write the data into the file!`;
      break;
    case TYPES.PARSE:
      message = `Faild to parse json data!`;
      break;
    case TYPES.STRINGIFY:
      message = `Faild to stringify data!`;
      break;
    case TYPES.REQUIRED:
      message = `${field} required!`;
      break;
    case TYPES.UPDATE:
      message = `The new ${field} and old ${field} are similar!`;
      break;
    case TYPES.NOT_FOUND:
      message = `The ${field} not found!`;
      break;
    case TYPES.INIT:
      message = `Data has not been initialized yet!`;
      break;
    case TYPES.VSCODE:
      message = `Failed to open VS Code`;
      break;
    case TYPES.EMPTY:
      message = `No ${field} stored yet!`;
      break;
    case TYPES.DUPLICATE:
      message = `There is already an existing ${field} repository!`;
      break;
    case TYPES.DOT_GIT:
      message = `The path is not a repository!`;
      break;
    case TYPES.MATCH:
      message = `The repository name doesn't match the old one!`;
      break;
  }

  return message;
};

const getSuccessMessage = (type, field) => {
  switch (type) {
    case TYPES.FILE_READ:
      message = `Success to read the data from the file!`;
      break;
    case TYPES.FILE_WRITE:
      message = `Success to write the data into the file!`;
      break;
    case TYPES.PARSE:
      message = `Success to parse json data!`;
      break;
    case TYPES.STRINGIFY:
      message = `Success to stringify data!`;
      break;
    case TYPES.REMOVE:
      message = `The repository has been removed successfully`;
      break;
    case TYPES.ADD:
      message = `${field} added to Switchy Successfully!`;
      break;
    case TYPES.UPDATE:
      message = `${field} is updated Successfully!`;
      break;
    case TYPES.ALL:
      message = `Switchy stored repositories:`;
      break;
    case TYPES.VSCODE:
      message = `Path Opened in VS Code Successfully!`;
      break;
    case TYPES.INIT:
      message = `The data has been initialized successfully!`;
      break;
    case TYPES.RESET:
      message = `Switchy is cleared successfully!`;
      break;
    case TYPES.LAST:
      message = "The last repository opened is :";
      break;
    case TYPES.REDIRECT:
      message = `The repository ${field} is opened successfully!`;
      break;
    case TYPES.DOT_GIT:
      message = `Repository Info:`;
      break;
  }

  return message;
};

module.exports = {
  TYPES,
  getSuccessMessage,
  getErrorMessage,
};
