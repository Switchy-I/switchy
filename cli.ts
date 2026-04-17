#!/usr/bin/env node

import { Command } from "commander";
import Action from "./action";

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
  .command("last")
  .description("Display the last opened repository (no arguments)")
  .action(() => {
    Action.lastAction();
  });

program
  .command("reset")
  .description("Clear all repositories stored (no arguments)")
  .action(() => {
    Action.resetAction();
  });

program
  .command("list")
  .description("List all repositories (no arguments).")
  .action(() => {
    Action.listAction();
  });

program
  .command("redirect <repoName>")
  .description("Open specfic repo with his repoName (arguments: `repoName`)")
  .action((repoName) => {
    Action.redirectAction(repoName);
  });

program
  .command("find <repoName>")
  .description(
    "Find for a repository to get its information by repoName (argument: `repoName`)",
  )
  .action((repoName) => {
    Action.searchAction(repoName);
  });

program
  .command("remove <repoName>")
  .description(
    "Remove a specific repository by its repoName (arguments: `repoName`)",
  )
  .action((repoName) => {
    Action.removeAction(repoName);
  });

program
  .command("update <repoName> <path>")
  .description(
    "Update the path of an existing repository (arguments: `repoName`, `path`)",
  )
  .action((repoName, path) => {
    Action.updateAction(repoName, path);
  });

program.parse(process.argv);
