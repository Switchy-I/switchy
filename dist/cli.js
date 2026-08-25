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
    .alias("i")
    .description("Initialize the data file where the repository and its data are stored (no arguments).")
    .action(() => {
    action_1.default.initAction();
});
program
    .command("add <path>")
    .alias("a")
    .description("Add a new repository (arguments: `path`).")
    .action((path) => {
    action_1.default.addAction(path);
});
program
    .command("last")
    .alias("lts")
    .description("Display the latest opened repository (no arguments).")
    .action(() => {
    action_1.default.lastAction();
});
program
    .command("clear")
    .alias("c")
    .description("Clear all repositories stored (no arguments).")
    .action(() => {
    action_1.default.resetAction();
});
program
    .command("list")
    .alias("ls")
    .description("List all repositories (no arguments).")
    .action(() => {
    action_1.default.listAction();
});
program
    .command("run")
    .option("-r, --repo <repoName>", "Existing repository name")
    .description("Open specfic repo with his repoName (no arguments).")
    .action(async (options) => {
    let repoName = options.repo;
    if (!repoName) {
        const answer = await utils_1.customPrompt.search();
        if (answer && answer.repoName) {
            repoName = answer.repoName;
        }
    }
    if (repoName) {
        action_1.default.redirectAction(repoName);
    }
});
program
    .command("find")
    .alias("f")
    .option("-r, --repo <repoName>", "Existing repository name")
    .description("Search for a specific repository by its repoName (no arguments).")
    .action(async (options) => {
    let repoName = options.repo;
    if (!repoName) {
        const answer = await utils_1.customPrompt.search();
        if (answer && answer.repoName) {
            repoName = answer.repoName;
        }
    }
    if (repoName) {
        action_1.default.searchAction(repoName);
    }
});
program
    .command("rm")
    .alias("r")
    .description("Remove a specific repository by its repoName (no arguments).")
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
    .command("up")
    .alias("u")
    .option("-r, --repo <repoName>", "Existing repository name")
    .option("-p, --path <path>", "New repository path")
    .description("Update the path of an existing repository (no arguments).")
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
if (!process.argv.slice(2).length) {
    program.help();
}
//# sourceMappingURL=cli.js.map