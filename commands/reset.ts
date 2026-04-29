import { init } from "./init";
import { TAGS } from "../utils/index";

export const reset = () => {
  init();
  return TAGS.CLEARED;
};
