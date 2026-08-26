import { TAGS, TagsType } from "./tags";
import { FileOperator } from "../utils/fileOperator";

import fs from "fs";
import path from "path";
import os from "os";

export const expandTilde = function(inputPath: string): string {
  if (!inputPath) return inputPath;
  if (inputPath === "~") return os.homedir();
  if (inputPath.startsWith("~/") || inputPath.startsWith("~\\")) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return inputPath;
}

export const pathIsExist = function (path: string): boolean {
  return fs.existsSync(path);
};

export const fileIsEmpty = function (path: string): TagsType {
  let data = FileOperator.readFromFile(path);

  if (
    data === null ||
    data === "" ||
    (typeof data === "object" && Object.keys(data).length === 0)
  ) {
    return TAGS.EMPTY;
  }

  return TAGS.FULL;
};

