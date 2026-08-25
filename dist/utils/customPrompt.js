"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const core_1 = require("@inquirer/core");
const _1 = require(".");
const models_1 = require("../models");
class CustomPrompt {
    handlePromptError(error) {
        if (error instanceof core_1.ExitPromptError) {
            (0, _1.logger)(new models_1.Log(_1.STATUS.INFO, (0, _1.getErrorMessage)(_1.TYPES.ABORT)));
        }
    }
    async search() {
        const data = _1.FileOperator.readFromFile((0, _1.getDataPath)());
        const { repositories } = _1.JsonOperator.parsingJsonData(data);
        try {
            const answer = await inquirer_1.default.prompt([
                {
                    type: "search",
                    name: "repoName",
                    message: "Type repository name:",
                    source: async (input) => {
                        const filteredRepositories = repositories.filter((repository) => String(repository.name).toLowerCase().includes(String(input).toLowerCase()));
                        return filteredRepositories.map((repository) => repository.name);
                    },
                    choices: repositories.map((repository) => repository.name),
                }
            ]);
            return answer;
        }
        catch (error) {
            this.handlePromptError(error);
        }
    }
    async confirm(message) {
        try {
            const answer = await inquirer_1.default.prompt({
                type: "confirm",
                message,
                name: "confirm",
            });
            return answer;
        }
        catch (error) {
            this.handlePromptError(error);
        }
    }
    async input(name, message) {
        try {
            const answer = await inquirer_1.default.prompt([{
                    type: "input",
                    message,
                    name,
                }]);
            return answer;
        }
        catch (error) {
            this.handlePromptError(error);
        }
    }
}
exports.default = new CustomPrompt();
//# sourceMappingURL=customPrompt.js.map