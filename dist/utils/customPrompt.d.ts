declare class CustomPrompt {
    private handlePromptError;
    search(): Promise<{
        repoName: any;
    } | undefined>;
    confirm(message: string): Promise<{
        confirm: any;
    } | undefined>;
    input(name: string, message: string): Promise<{
        [x: string]: any;
    } | undefined>;
}
declare const _default: CustomPrompt;
export default _default;
//# sourceMappingURL=customPrompt.d.ts.map