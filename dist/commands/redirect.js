"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = void 0;
const index_1 = require("../utils/index");
const redirect = (name) => {
    // Construct the file path to the JSON data file where repositories are stored.
    const path = (0, index_1.getDataPath)();
    // Step 1: Read the data from the JSON file.
    let data = index_1.FileOperator.readFromFile(path);
    // Step 2: Parse the JSON data to make it manipulable.
    data = index_1.JsonOperator.parsingJsonData(data);
    // Default message to return, assuming the repo exists.
    let message = index_1.TAGS.EXIST;
    // Step 3: Check if the repository exists in the data file.
    const index = index_1.RepoOperator.getRepoIndexByName(data["repositories"], name);
    // If index is -1, it means the repository doesn't exist, return "NotExist".
    if (index === -1)
        return index_1.TAGS.DOES_NOT_EXIST;
    // Step 4: Update the "lastOpen" field to the name of the current repository.
    index_1.RepoOperator.updataRepo(data, index);
    data["lastOpen"] = name;
    // Step 5: Run the script to open the repository in VSCode using `RunScript.openInVSCode`.
    // RunScript.openInVSCode("../Zoombie-CLI");
    index_1.RunScript.openInVSCode(data["repositories"][index]["path"]);
    // Step 6: Convert the updated data back to a string format for writing to the file.
    data = index_1.JsonOperator.stringDataToWriteInJson(data);
    // Step 7: Write the updated data back to the JSON file.
    index_1.FileOperator.writeToFile(path, data);
    // Return the message indicating that the repository was found and processed.
    return message;
};
exports.redirect = redirect;
//# sourceMappingURL=redirect.js.map