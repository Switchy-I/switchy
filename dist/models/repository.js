"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    name;
    path;
    lastOpen;
    constructor(name, path, lastOpen) {
        this.name = name;
        this.path = path;
        this.lastOpen = lastOpen;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map