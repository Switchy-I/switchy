"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.logger = void 0;
const logger = (log) => {
    const statusColor = log.status === exports.STATUS.SUCCESS
        ? CONSOLE_COLORS.SUCCESS
        : log.status === exports.STATUS.FAILED ? CONSOLE_COLORS.FAILED : CONSOLE_COLORS.INFO;
    const dataColor = CONSOLE_COLORS.DATA;
    if (log) {
        console.log(`[${statusColor}${log.status}\x1b[0m]: ${log.message}`);
        if (log.data) {
            console.log(`${dataColor}Data ⤵\x1b[0m`);
            console.table(log.data);
        }
    }
};
exports.logger = logger;
exports.STATUS = {
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    INFO: "INFO",
};
const CONSOLE_COLORS = {
    FAILED: "\x1b[31m",
    SUCCESS: "\x1b[32m",
    INFO: "\x1b[34m",
    DATA: "\x1b[33m",
};
//# sourceMappingURL=logger.js.map