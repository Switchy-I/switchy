```txt
                       ____               _   _            _
                      / ___|  __      __ (_) | |_    ___  | |__    _   _
                      \___ \  \ \ /\ / / | | | __|  / __| | '_ \  | | | |
                      ___) |   \ V  V /  | | | |_  | (__  | | | | | |_| |
                      |____/    \_/\_/   |_|  \__|  \___| |_| |_|  \__, |
                                                                   |___/
```
<details>
  <summary> 🔢 Table of contents</summary>
  <br>

- 🔻[Table of contents](#table-of-contents)
- 🔻[Problem Statement](#problem-statement)
- 🔻[Solution](#solution)
- 🔻[Features](#features)
- 🔻[Non-Functional Requirements](#non-functional-requirements)
- 🔻[Installation](#installation)
- 🔻[Contributors](#contributors)
- 🔻[Developers](#developers)
- 🔻[Suggestions](#suggestions)

  <br>
</details>


<details>
  <summary>⛈️ Problem Statement</summary>
  <br>

Managing multiple repositories on a local device can be cumbersome, requiring manual tracking of paths, frequent navigation, and inefficient switching between projects. Developers often struggle with quickly accessing their most-used repositories and maintaining an organized workflow.  

  <br>
</details>

<details>
  <summary>✔️ Solution</summary>
  <br>
  

Swichy provides a simple command-line interface to streamline repository management. By offering intuitive commands for adding, listing, updating, and accessing repositories, Swichy enhances productivity, reduces manual effort, and ensures seamless repository navigation. With efficient storage and retrieval mechanisms, Swichy simplifies the developer experience.

  <br>
</details>


## Features:

Swichy is a command-line interpreter designed for easy management of repositories on a local device. The following features:

- **Repository Management**

  - `Initialize Storage`: The system must allow users to initialize the data file where repository information is stored.
  - `Add Repository`: Users must be able to add a new repository by specifying its path.
  - `List Repositories`: The system must provide a command to list all stored repositories.
  - `Find Repository`: Users must be able to search for a repository by its name to retrieve its details.
  - `Remove Repository`: Users must be able to remove a repository by specifying its name.
  - `Update Repository Path`: The system must allow users to update the path of an existing repository.
  - `Clear Repositories`: Users must be able to clear all stored repositories at once.

- **Repository Access**

  - `Open Last Used Repository`: Users must be able to display and access the last opened repository.
  - `Redirect to Repository`: Users must be able to open a specific repository by its name.

- **Help and Guidance**

  - `Help Command`: The system must provide a help command to display information about available commands and their usage.

<details>
  <summary>📌 Non-Functional Requirements</summary>
    <br>
  

- **Performance**

  - The system executes commands efficiently, with minimal latency.
  - It should be optimized to handle a large number of repositories without significant performance degradation.

- **Usability**

  - The CLI provides clear error messages when invalid commands or arguments are used.
  - The command outputs should be human-readable and formatted for clarity.

- **Maintainability**

  - The code follows modular principles to allow easy updates and modifications.
  - It should be well-documented for future improvements and debugging.

- **Portability**

  - The system is platform-independent and run on major operating systems (Linux, macOS, Windows).

- **Reliability**

  - The system ensures that repository data is not lost or corrupted due to unexpected failures.
  - It includes basic validation to prevent incorrect data from being stored.

- **Scalability**

  - The system is able to support an increasing number of repositories without requiring significant changes to its architecture.

- **Extensibility**

  - The design allows for future extensions, such as remote repository support or integration with version control systems.

    <br>
</details>


## Installation:

- Install Node.js  
  Follow the instructions from the [official Node.js website](https://nodejs.org/) to install the latest version.

- Install the package


  ```shell
  npm install switchy-cli --global
  ```
  
- [Documentation on Github](https://github.com/MustafaAhmed313/switchy/blob/develop/docs/commands.md)

## Contributors:

Swichy is an open-source project, and contributions from developers are highly encouraged. Contributors can help improve the project in the following ways:

- **Reporting Issues**: Identifying and reporting bugs or suggesting enhancements.
- **Code Contributions**: Submitting pull requests with new features, optimizations, or bug fixes.
- **Documentation**: Improving and expanding project documentation to help users and developers.
- **Testing**: Assisting with testing and quality assurance to ensure robustness.

### Developers:

- [MustafaAhmed313](https://github.com/MustafaAhmed313)
- [Abdelrahman122003](https://github.com/Abdelrahman122003)

## Suggestions:

We welcome feedback and feature requests to enhance Swichy. If you have ideas for improvements, feel free to:

- Open an issue on our [GitHub repository](https://github.com/MustafaAhmed313/Swichy/issues).
- Discuss potential features in our community discussions (if available).
- Contribute directly by submitting a pull request with your proposed changes.

Your input helps shape the future of Swichy!
