import { exec } from "child_process";
import {
  getErrorMessage,
  getSuccessMessage,
  TYPES,
} from "../utils/messageHandler";
import { getPath } from "./pathModule";
import { logger, STATUS } from "../utils/logger";
import { Log } from "../models/log";

export class RunScript {
  static openInVSCode = (path: string) => {
    exec(`code "${path}"`, (error) => {
      if (error) {
        logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.VSCODE)));
      } else {
        logger(new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.VSCODE)));
      }
    });
  };

  static initializeData = () => {
    const path = getPath("../scripts/init.sh");

    exec(`bash ${path}`, (error, stdout, stderr) => {
      if (error) {
        logger(new Log(STATUS.FAILED, error.message));
        return;
      } else if (stderr) {
        logger(new Log(STATUS.FAILED, stderr));
        return;
      }
      logger(new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.INIT)));
    });
  };

  static initializeDataPowerShell = () => {
    const path = getPath("../scripts/init.ps1");

    exec(
      `powershell -ExecutionPolicy Bypass -File ${path}`,
      (error, stdout, stderr) => {
        if (error) {
          logger(new Log(STATUS.FAILED, error.message));
          return;
        } else if (stderr) {
          logger(new Log(STATUS.FAILED, stderr));
          return;
        }
        logger(new Log(STATUS.SUCCESS, getSuccessMessage(TYPES.INIT)));
      },
    );
  };

  static dotGitIsExist = async (repoPath: string) => {
    const path = getPath("../scripts/dotGitExist.sh");

    return new Promise((resolve, reject) => {
      exec(`bash ${path} ${repoPath}`, (error, stdout, stderr) => {
        if (error) {
          logger(new Log(STATUS.FAILED, error.message));
          return resolve(0);
        }
        if (stderr) {
          logger(new Log(STATUS.FAILED, stderr));
          return resolve(0);
        }
        resolve(stdout.trim());
      });
    });
  };

  static dotGitIsExistPowerShell = async (repoPath: string) => {
    const path = getPath("../scripts/dotGitExist.ps1");

    return new Promise((resolve, reject) => {
      exec(
        `powershell -ExecutionPolicy Bypass -File ${path} ${repoPath}`,
        (error, stdout, stderr) => {
          if (error) {
            logger(new Log(STATUS.FAILED, error.message));
            return resolve(0);
          }
          if (stderr) {
            logger(new Log(STATUS.FAILED, stderr));
            return resolve(0);
          }
          resolve(stdout.trim());
        },
      );
    });
  };
}
