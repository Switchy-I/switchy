import { TAGS, TagsType } from "./tags";
import { FileOperator } from "../utils/fileOperator";

import fs from "fs";

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

