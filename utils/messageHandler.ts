export const TYPES = {
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
} as const;

export type MessageType = (typeof TYPES)[keyof typeof TYPES];

export const getErrorMessage = (type: MessageType, field?: string): string => {
  switch (type) {
    case TYPES.FILE_READ:
      return `Failed to read the data from the file!`;

    case TYPES.FILE_WRITE:
      return `Failed to write the data into the file!`;

    case TYPES.PARSE:
      return `Faild to parse json data!`;

    case TYPES.STRINGIFY:
      return `Faild to stringify data!`;

    case TYPES.REQUIRED:
      return `${field} required!`;

    case TYPES.UPDATE:
      return `The new ${field} and old ${field} are similar!`;

    case TYPES.NOT_FOUND:
      return `The ${field} not found!`;

    case TYPES.INIT:
      return `Data has not been initialized yet!`;

    case TYPES.VSCODE:
      return `Failed to open VS Code`;

    case TYPES.EMPTY:
      return `No ${field} stored yet!`;

    case TYPES.DUPLICATE:
      return `There is already an existing ${field} repository!`;

    case TYPES.DOT_GIT:
      return `The path is not a repository!`;

    case TYPES.MATCH:
      return `The repository name doesn't match the old one!`;

    case TYPES.ABORT:
      return `The prompt session is aborted!`;

    default:
      return "Unknown error!";
  }
};

export const getSuccessMessage = (
  type: MessageType,
  field?: string,
): string => {
  switch (type) {
    case TYPES.FILE_READ:
      return `Success to read the data from the file!`;

    case TYPES.FILE_WRITE:
      return `Success to write the data into the file!`;

    case TYPES.PARSE:
      return `Success to parse json data!`;

    case TYPES.STRINGIFY:
      return `Success to stringify data!`;

    case TYPES.REMOVE:
      return `The repository has been removed successfully`;

    case TYPES.ADD:
      return `${field} added to Switchy Successfully!`;

    case TYPES.UPDATE:
      return `${field} is updated Successfully!`;

    case TYPES.ALL:
      return `Switchy stored repositories:`;

    case TYPES.VSCODE:
      return `Path Opened in VS Code Successfully!`;

    case TYPES.INIT:
      return `The data has been initialized successfully!`;

    case TYPES.RESET:
      return `Switchy is cleared successfully!`;

    case TYPES.LAST:
      return "The last repository opened is :";

    case TYPES.REDIRECT:
      return `The repository ${field} is opened successfully!`;

    case TYPES.DOT_GIT:
      return `Repository Info:`;

    default:
      return "Success!";
  }
};
