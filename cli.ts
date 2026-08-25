#!/usr/bin/env node

import { Command } from "commander";
import Action from "./action";
import { customPrompt, expandTilde } from "./utils"

const program = new Command();

program
  .command("init")
  .description(
    "Initialize the data file where the repository and its data are stored (no arguments).",
  )
  .action(() => {
    Action.initAction();
  });

program
  .command("add <path>")
  .description("Add a new repository (arguments: `path`).")
  .action((path) => {
    Action.addAction(path);
  });

program
  .command("lts")
  .description("Display the latest opened repository")
  .action(() => {
    Action.lastAction();
  });

program
  .command("clear")
  .description("Clear all repositories stored")
  .action(() => {
    Action.resetAction();
  });

program
  .command("ls")
  .description("List all repositories (no arguments).")
  .action(() => {
    Action.listAction();
  });

program
  .command("run")
  .option("-r, --repo <repoName>", "Existing repository name")
  .description("Open specfic repo with his repoName")
  .action(async (options) => {
    let repoName = options.repo;
    
    if (!repoName) {
      const answer = await customPrompt.search();
      if (answer && answer.repoName) {
        repoName = answer.repoName;
      }
    }
    
    Action.redirectAction(repoName);
  });

program
  .option("-s, --search", "Search for a repository to get its information by repoName")
  .action(async (options) => {
    if (!options.search) {
      program.help();
      return;
    }

    const answer = await customPrompt.search();
    if (answer && answer.repoName) {
      Action.searchAction(answer.repoName);
    }
  });

program
  .command("rm")
  .description(
    "Remove a specific repository by its repoName",
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
  .option("-r, --repo <repoName>", "Existing repository name")
  .option("-p, --path <path>", "New repository path")
  .description(
    "Update the path of an existing repository",
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
