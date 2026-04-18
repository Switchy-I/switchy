import { Log } from "../models/log";
import { logger, STATUS } from "./logger";
import { getErrorMessage, TYPES } from "./messageHandler";

export class JsonOperator {
  static parsingJsonData = function (data: string) {
    try {
      const parsedData = JSON.parse(data);
      return parsedData;
    } catch (err) {
      logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.PARSE)));
      process.exit(0);
    }
  };

  static stringDataToWriteinJson = function (data: any) {
    try {
      const stringData = JSON.stringify(data);
      return stringData;
    } catch (err) {
      logger(new Log(STATUS.FAILED, getErrorMessage(TYPES.STRINGIFY)));
      process.exit(0);
    }
  };
}

