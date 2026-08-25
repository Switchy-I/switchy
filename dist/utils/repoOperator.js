"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoOperator = void 0;
class RepoOperator {
    static getRepoIndexByName = (data, name) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name)
                return i;
        }
        return -1;
    };
    static removeRepoByIndex = (data, index) => {
        data.splice(index, 1);
    };
    static updataRepo = (data, index) => {
        data["repositories"][index]["lastOpen"] = new Date(Date.now()).toUTCString();
    };
}
exports.RepoOperator = RepoOperator;
//# sourceMappingURL=repoOperator.js.map