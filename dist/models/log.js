"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
    status;
    message;
    data;
    constructor(status, message, data = null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.Log = Log;
//# sourceMappingURL=log.js.map