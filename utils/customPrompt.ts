import inquirer from "inquirer";
import { ExitPromptError } from "@inquirer/core";
import { FileOperator, getDataPath, getErrorMessage, JsonOperator, logger, STATUS, TYPES } from ".";
import { Repository } from "../models/repository";
import { Log } from "../models";

class CustomPrompt {

  private handlePromptError(error: any) {
    if (error instanceof ExitPromptError) {
      logger(new Log(STATUS.INFO, getErrorMessage(TYPES.ABORT)));
    }
  }

  async search() {
    const data = FileOperator.readFromFile(getDataPath());
    const { repositories } = JsonOperator.parsingJsonData(data);
    try {
      const answer = await inquirer.prompt([
        {
          type: "search",
          name: "repoName",
          message: "Type repository name:",
          source: async (input: string) => {
            const filteredRepositories = repositories.filter((repository: Repository) =>
              String(repository.name).toLowerCase().includes(String(input).toLowerCase())
            );
            return filteredRepositories.map((repository: Repository) => repository.name);
          },
          choices: repositories.map((repository: Repository) => repository.name),
        }
      ]);

      return answer;
    } catch (error: any) {
      this.handlePromptError(error);
    }
  }

  async confirm(message: string) {
    try {
      const answer = await inquirer.prompt({
        type: "confirm",
        message,
        name: "confirm",
      });

      return answer;
    } catch (error: any) {
      this.handlePromptError(error);
    }
  }

  async input(name: string, message: string) {
    try {
      const answer = await inquirer.prompt([{
        type: "input",
        message,
        name, 
      }]);

      return answer;
    } catch (error: any) {
      this.handlePromptError(error);
    }
  }
}

export default new CustomPrompt();