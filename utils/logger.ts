import { Log } from "../models/log";

export const logger = (log: Log) => {
  const statusColor =
    log.status === STATUS.SUCCESS
      ? CONSOLE_COLORS.SUCCESS
      : CONSOLE_COLORS.FAILED;

  const dataColor = CONSOLE_COLORS.DATA;
  if (log) {
    console.log(`[${statusColor}${log.status}\x1b[0m]: ${log.message}`);
    if (log.data) {
      console.log(`${dataColor}Data ⤵\x1b[0m`);
      console.table(log.data);
    }
  }
};

export const STATUS = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
} as const;

export type StatusType = (typeof STATUS)[keyof typeof STATUS];

const CONSOLE_COLORS = {
  FAILED: "\x1b[31m",
  SUCCESS: "\x1b[32m",
  DATA: "\x1b[33m",
};

