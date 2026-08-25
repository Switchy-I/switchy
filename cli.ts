#!/usr/bin/env node

import { Command } from "commander";
import Action from "./action";
import { customPrompt, expandTilde } from "./utils"

const program = new Command();

program
  .command("init")
  .alias("i")
  .description(
    "Initialize the data file where the repository and its data are stored (no arguments).",
  )
  .action(() => {
    Action.initAction();
  });

program
  .command("add <path>")
  .alias("a")
  .description("Add a new repository (arguments: `path`).")
  .action((path) => {
    Action.addAction(path);
  });

program
  .command("last")
  .alias("lts")
  .description("Display the latest opened repository (no arguments).")
  .action(() => {
    Action.lastAction();
  });

program
  .command("clear")
  .alias("c")
  .description("Clear all repositories stored (no arguments).")
  .action(() => {
    Action.resetAction();
  });

program
  .command("list")
  .alias("ls")
  .description("List all repositories (no arguments).")
  .action(() => {
    Action.listAction();
  });

program
  .command("run")
  .option("-r, --repo <repoName>", "Existing repository name")
  .description("Open specfic repo with his repoName (no arguments).")
  .action(async (options) => {
    let repoName = options.repo;

    if (!repoName) {
      const answer = await customPrompt.search();
      if (answer && answer.repoName) {
        repoName = answer.repoName;
      }
    }

    if (repoName) {
      Action.redirectAction(repoName);
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
      const answer = await customPrompt.search();
      if (answer && answer.repoName) {
        repoName = answer.repoName;
      }
    }

    if (repoName) {
      Action.searchAction(repoName);
    }
  });

program
  .command("rm")
  .alias("r")
  .description(
    "Remove a specific repository by its repoName (no arguments).",
  )
  .action(async () => {
    const answer = await customPrompt.search();
    if (answer && answer.repoName) {
      const deleted = await customPrompt.confirm(
        `Are you sure you want to remove "${answer.repoName}" repository?`
      );
      if (deleted && deleted.confirm) {
        Action.removeAction(answer.repoName);
      }
    }
  });

program
  .command("up")
  .alias("u")
  .option("-r, --repo <repoName>", "Existing repository name")
  .option("-p, --path <path>", "New repository path")
  .description(
    "Update the path of an existing repository (no arguments).",
  )
  .action(async (options) => {
    let repoName = options.repo, path = options.path;

    if (!repoName) {
      const answer = await customPrompt.search();
      if (answer && answer.repoName) {
        repoName = answer.repoName;
      }
    }

    if (!options.path) {
      const answer = await customPrompt.input("path", "Enter the new path:");
      if (answer && answer.path) {
        path = expandTilde(answer.path);
      }
    }

    Action.updateAction(repoName, path);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}