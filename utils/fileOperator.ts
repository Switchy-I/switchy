import fs, { PathOrFileDescriptor } from "fs";
import config from "../config/config";
import { Log } from "../models/log";
import { logger, STATUS } from "./logger";
import { getErrorMessage, TYPES } from "./messageHandler";
import { getPath } from "./pathModule";


export class FileOperator {
  static readFromFile = function (file: PathOrFileDescriptor) {
    try {
      const data = fs.readFileSync(file, "utf-8");
      return data;
    } catch (err) {
      logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.FILE_READ)));
      process.exit(0);
    }
  };

  static writeToFile = function (
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
  ) {
    try {
      const dirPath = getPath(`../${config.DIRECTORY_DATA}`);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.writeFileSync(file, data, "utf-8");
    } catch (err) {
      logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.FILE_WRITE)));
      process.exit(0);
    }
  };
}
