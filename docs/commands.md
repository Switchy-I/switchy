# Switchy CLI — Commands Reference

Switchy is a CLI for managing and quickly switching between local repository paths.

## Usage

```bash
switchy <command> [options]
```

Running `switchy` with no command shows this help output.

---

## Commands

### `init`

**Alias:** `i`

Initialize the data file where repositories and their metadata are stored.

```bash
switchy init
switchy i
```

**Arguments:** none
**Options:** none

---

### `add <path>`

**Alias:** `a`

Add a new repository to the store.

```bash
switchy add ./my-project
switchy a ~/Desktop/repositories/switchy
```

**Arguments:**

| Argument | Required | Description |
|---|---|---|
| `<path>` | Yes | Path to the repository to add |

**Options:** none

**Notes:**
- Passed directly as a positional shell argument, so `~` is expanded by your shell automatically.

---

### `list`

**Alias:** `ls`

List all repositories currently stored.

```bash
switchy list
switchy ls
```

**Arguments:** none
**Options:** none

---

### `last`

**Alias:** `lts`

Display the most recently opened repository.

```bash
switchy last
switchy lts
```

**Arguments:** none
**Options:** none

---

### `find`

**Alias:** `f`

Search for a repository and display its information.

```bash
switchy find
switchy find -r switchy
switchy f --repo switchy
```

**Arguments:** none

**Options:**

| Option | Alias | Description |
|---|---|---|
| `--repo <repoName>` | `-r` | Existing repository name |

**Notes:**
- If `-r`/`--repo` is omitted, an interactive search prompt is shown instead.

---

### `run`

Open a specific repository by name.

```bash
switchy run
switchy run -r switchy
```

**Arguments:** none

**Options:**

| Option | Alias | Description |
|---|---|---|
| `--repo <repoName>` | `-r` | Existing repository name |

**Notes:**
- If `-r`/`--repo` is omitted, an interactive search prompt is shown instead.

---

### `up`

**Alias:** `u`

Update the stored path of an existing repository.

```bash
switchy up -r switchy -p ~/Desktop/repositories/switchy
switchy u
```

**Arguments:** none

**Options:**

| Option | Alias | Description |
|---|---|---|
| `--repo <repoName>` | `-r` | Existing repository name |
| `--path <path>` | `-p` | New repository path |

**Notes:**
- If `-r`/`--repo` is omitted, an interactive search prompt is shown instead.
- If `-p`/`--path` is omitted, an interactive text input is shown instead. Paths entered here are expanded for `~` automatically (the shell can't do this since it's typed into a prompt, not passed as a shell argument).

---

### `rm`

**Alias:** `r`

Remove a specific repository from the store.

```bash
switchy rm
switchy r
```

**Arguments:** none
**Options:** none

**Notes:**
- Always launches an interactive search prompt to select the repository.
- Asks for confirmation before deleting.

---

### `clear`

**Alias:** `c`

Clear **all** repositories stored.

```bash
switchy clear
switchy c
```

**Arguments:** none
**Options:** none

⚠️ **Destructive** — this removes every stored repository, not just one. Use `rm` to remove a single repository instead.

---

## Command Summary

| Command | Alias | Options | Description |
|---|---|---|---|
| `init` | `i` | — | Initialize the data store |
| `add <path>` | `a` | — | Add a new repository |
| `list` | `ls` | — | List all repositories |
| `last` | `lts` | — | Show the last opened repository |
| `find` | `f` | `-r, --repo` | Search for a repository |
| `run` | — | `-r, --repo` | Open a repository |
| `up` | `u` | `-r, --repo`, `-p, --path` | Update a repository's path |
| `rm` | `r` | — | Remove a repository |
| `clear` | `c` | — | Remove all repositories |