#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const action_1 = __importDefault(require("./action"));
const utils_1 = require("./utils");
const program = new commander_1.Command();
program
    .command("init")
    .description("Initialize the data file where the repository and its data are stored (no arguments).")
    .action(() => {
    action_1.default.initAction();
});
program
    .command("add <path>")
    .description("Add a new repository (arguments: `path`).")
    .action((path) => {
    action_1.default.addAction(path);
});
program
    .command("last")
    .description("Display the last opened repository (no arguments)")
    .action(() => {
    action_1.default.lastAction();
});
program
    .command("reset")
    .description("Clear all repositories stored (no arguments)")
    .action(() => {
    action_1.default.resetAction();
});
program
    .command("ls")
    .description("List all repositories (no arguments).")
    .action(() => {
    action_1.default.listAction();
});
program
    .command("redirect <repoName>")
    .description("Open specfic repo with his repoName (arguments: `repoName`)")
    .action((repoName) => {
    action_1.default.redirectAction(repoName);
});
program
    .option("-s, --search", "Search for a repository to get its information by repoName")
    .action(async (options) => {
    if (!options.search) {
        program.help();
        return;
    }
    const answer = await utils_1.customPrompt.search();
    if (answer && answer.repoName) {
        action_1.default.searchAction(answer.repoName);
    }
});
program
    .command("rm")
    .description("Remove a specific repository by its repoName")
    .action(async () => {
    const answer = await utils_1.customPrompt.search();
    if (answer && answer.repoName) {
        const deleted = await utils_1.customPrompt.confirm(`Are you sure you want to remove "${answer.repoName}" repository?`);
        if (deleted && deleted.confirm) {
            action_1.default.removeAction(answer.repoName);
        }
    }
});
program
    .command("update <repoName> <path>")
    .description("Update the path of an existing repository (arguments: `repoName`, `path`)")
    .action((repoName, path) => {
    action_1.default.updateAction(repoName, path);
});
program
    .command("up")
    .option("-r, --repo <repoName>", "Existing repository name")
    .option("-p, --path <path>", "New repository path")
    .description("Update the path of an existing repository")
    .action(async (options) => {
    let repoName = options.repo, path = options.path;
    if (!repoName) {
        const answer = await utils_1.customPrompt.search();
        if (answer && answer.repoName) {
            repoName = answer.repoName;
        }
    }
    if (!options.path) {
        const answer = await utils_1.customPrompt.input("path", "Enter the new path:");
        if (answer && answer.path) {
            path = (0, utils_1.expandTilde)(answer.path);
        }
    }
    action_1.default.updateAction(repoName, path);
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map