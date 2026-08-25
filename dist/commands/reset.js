"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = void 0;
const init_1 = require("./init");
const index_1 = require("../utils/index");
const reset = () => {
    (0, init_1.init)();
    return index_1.TAGS.CLEARED;
};
exports.reset = reset;
//# sourceMappingURL=reset.js.map