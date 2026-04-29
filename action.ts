import os from "os";

import {
  add,
  update,
  remove,
  list,
  init,
  redirect,
  search,
  last,
  reset,
} from "./commands";

import {
  logger,
  STATUS,
  TYPES,
  getErrorMessage,
  getSuccessMessage,
  pathIsExist,
  getName,
  RunScript,
  TAGS,
} from "./utils";

import { Log } from "./models/log";

class Action {
  static initAction = () => {
    init();
    return logger(new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.INIT)));
  };

  static resetAction = () => {
    reset();
    return logger(new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.RESET)));
  };

  static addAction = (path: string) => {
    if (!path) {
      logger(
        new Log(
          STATUS.FAILED,
          getErrorMessage(TYPES.REQUIRED, `The repository path`),
        ),
      );
      return TAGS.MISSING;
    }

    if (!pathIsExist(path)) {
      logger(
        new Log(
          STATUS.FAILED,
          getErrorMessage(TYPES.NOT_FOUND, "repository path is"),
        ),
      );
      return TAGS.DOES_NOT_EXIST;
    }

    (async () => {
      let response;

      if (os.platform() === "linux" || os.platform() === "darwin") {
        response = await RunScript.dotGitIsExist(path);
      } else {
        response = await RunScript.dotGitIsExistPowerShell(path);
      }

      if (response === "false") {
        logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.DOT_GIT)));
        return TAGS.NOT_GIT_REPO;
      }

      const message = add(path);
      const name = getName(path);

      if (message.tag === TAGS.DUPLICATED) {
        logger(
          new Log(STATUS.FAILED, getErrorMessage(TYPES.DUPLICATE, `{${name}}`)),
        );
      } else {
        logger(
          new Log(
            STATUS.SUCCESS,
            getSuccessMessage(TYPES.ADD, `The Repository ${name}`),
            message.repository,
          ),
        );
      }
      return message.tag;
    })();
  };

  static lastAction = () => {
    const name = last();
    logger(new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.LAST), name));
  };

  static listAction = () => {
    const repositories = list();

    if (repositories === TAGS.EMPTY) {
      return logger(
        new Log(STATUS.SUCCESS, getErrorMessage(TYPES.EMPTY, "repositories")),
      );
    } else
      return logger(
        new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.ALL), repositories),
      );
  };

  static redirectAction = (repoName: string) => {
    const message = redirect(repoName);
    logger(
      new Log(
        message === TAGS.DOES_NOT_EXIST ? STATUS.FAILED : STATUS.SUCCESS,
        message === TAGS.DOES_NOT_EXIST
          ? getErrorMessage(TYPES.NOT_FOUND, `repository {${repoName}} is`)
          : getSuccessMessage(TYPES.REDIRECT, repoName),
      ),
    );

    return message;
  };

  static searchAction = (name: string) => {
    const repository = search(name);
    if (repository === TAGS.DOES_NOT_EXIST) {
      logger(
        new Log(
          STATUS.FAILED,
          getErrorMessage(TYPES.NOT_FOUND, `repository ${name} is`),
        ),
      );
      return repository;
    } else {
      logger(
        new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.DOT_GIT), repository),
      );
      return TAGS.EXIST;
    }
  };

  static removeAction = (name: string) => {
    const message = remove(name);

    logger(
      new Log(
        message !== TAGS.REMOVED ? STATUS.FAILED : STATUS.SUCCESS,
        message !== TAGS.REMOVED
          ? getErrorMessage(TYPES.NOT_FOUND, `repository ${name} is`)
          : getSuccessMessage(TYPES.REMOVE),
      ),
    );
    return message;
  };

  static updateAction = (name: string, path: string) => {
    if (!name || !path) {
      logger(
        new Log(
          STATUS.FAILED,
          getErrorMessage(TYPES.REQUIRED, "Repository name and path are"),
        ),
      );
      return TAGS.MISSING;
    }

    if (!pathIsExist(path)) {
      logger(
        new Log(
          STATUS.FAILED,
          getErrorMessage(TYPES.NOT_FOUND, "Repository path is"),
        ),
      );
      return TAGS.DOES_NOT_EXIST;
    }

    (async () => {
      let response;

      if (os.platform() === "linux" || os.platform() === "darwin") {
        response = await RunScript.dotGitIsExist(path);
      } else {
        response = await RunScript.dotGitIsExistPowerShell(path);
      }

      if (response === "false") {
        logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.DOT_GIT)));
        return TAGS.NOT_GIT_REPO;
      }

      const message = update(name, path);

      if (message === TAGS.NO_MATCH) {
        logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.MATCH)));
      } else if (message === TAGS.DOES_NOT_EXIST) {
        logger(
          new Log(
            STATUS.FAILED,
            getErrorMessage(TYPES.NOT_FOUND, `repository ${name} is`),
          ),
        );
      } else if (message === TAGS.DUPLICATED) {
        logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.UPDATE, "path")));
      } else {
        const repository = search(`${name}`);
        logger(
          new Log(
            STATUS.SUCCESS,
            getSuccessMessage(TYPES.UPDATE, `{${name}} repository`),
            repository,
          ),
        );
      }
      return message;
    })();
  };
}

export default Action;
