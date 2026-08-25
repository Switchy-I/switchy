import { Repository } from "../models/repository";
export declare const add: (path: string) => {
    tag: "duplicated";
    repository?: never;
} | {
    tag: "added";
    repository: Repository;
};
//# sourceMappingURL=add.d.ts.map