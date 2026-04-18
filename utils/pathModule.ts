import path from "path";
import os from "os";

import config from "../config/config";

export const getDataPath = function () {
  return path.join(
    __dirname,
    `../${config.DIRECTORY_DATA}/${config.REPOSITORY_NAME}.json`
  );
};

export const getPath = function (filePath: string) {
  return path.join(__dirname, filePath);
};

export const getName = function (path: string) {
  const currentOS = os.type();
  const condition = currentOS === `Linux` || currentOS === `Darwin`;
  const index = path.lastIndexOf(condition ? "/" : `\\`) + 1;
  const name = path.substring(index);
  return name;
};