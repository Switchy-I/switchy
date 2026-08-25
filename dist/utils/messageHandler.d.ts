export declare const TYPES: {
    readonly NOT_FOUND: "not-found";
    readonly FILE_READ: "file-read";
    readonly FILE_WRITE: "file-write";
    readonly PARSE: "parse-json";
    readonly STRINGIFY: "stringify-data";
    readonly REQUIRED: "required";
    readonly VSCODE: "vscode";
    readonly DUPLICATE: "duplicate";
    readonly DOT_GIT: ".git";
    readonly ADD: "add";
    readonly UPDATE: "update";
    readonly REMOVE: "remove";
    readonly ALL: "all";
    readonly LAST: "last";
    readonly EMPTY: "empty";
    readonly INIT: "init";
    readonly RESET: "reset";
    readonly REDIRECT: "redirect";
    readonly MATCH: "match";
    readonly ABORT: "abort";
};
export type MessageType = (typeof TYPES)[keyof typeof TYPES];
export declare const getErrorMessage: (type: MessageType, field?: string) => string;
export declare const getSuccessMessage: (type: MessageType, field?: string) => string;
//# sourceMappingURL=messageHandler.d.ts.map