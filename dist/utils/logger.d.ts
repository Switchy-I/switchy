import { Log } from "../models/log";
export declare const logger: (log: Log) => void;
export declare const STATUS: {
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly INFO: "INFO";
};
export type StatusType = (typeof STATUS)[keyof typeof STATUS];
//# sourceMappingURL=logger.d.ts.map