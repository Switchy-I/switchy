declare class Action {
    static initAction: () => void;
    static resetAction: () => void;
    static addAction: (path: string) => "does not exist" | "missing" | undefined;
    static lastAction: () => void;
    static listAction: () => void;
    static redirectAction: (repoName: string) => "exist" | "does not exist";
    static searchAction: (name: string) => any;
    static removeAction: (name: string) => "does not exist" | "removed";
    static updateAction: (name: string, path: string) => "does not exist" | "missing" | undefined;
}
export default Action;
//# sourceMappingURL=action.d.ts.map