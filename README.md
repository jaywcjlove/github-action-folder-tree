Print Folder Tree
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![test](https://github.com/jaywcjlove/github-action-folder-tree/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/github-action-folder-tree/actions/workflows/ci.yml)

View the folder directory tree structure, similar to the output of the `tree` command

## Example Usage

```yml
- name: Print Folder Tree
  uses: jaywcjlove/github-action-folder-tree@main
  with:
    exclude: "node_modules|dist|.git|.husky"
    path: ./src
    depth: 2
```

Output Project Structure

```sh
├── .lintstagedrc
├── LICENSE
├── README.md
├── action.yml
├─> build
├── package-lock.json
├── package.json
├── renovate.json
├─> src
│   └── index.ts
└── tsconfig.json
```

```yml
- name: Print Folder Tree
  uses: jaywcjlove/github-action-folder-tree@main
  id: tree
  with:
    exclude: "node_modules|dist|.git|.husky"
    path: ./src
    depth: 2

- name: Modify README.md
  uses: jaywcjlove/github-action-modify-file-content@main
  with:
    path: README.md
    body: ${{ steps.tree.outputs.content }}
```

Configure dree using JSON

```yml
- name: Print Folder Tree
  uses: jaywcjlove/github-action-folder-tree@main
  with:
    config: './docs/dree-config.json'
```

## Inputs

- `path` Folder path. (default `./`)
- `depth` Scan the maximum depth reachable for the given path (default `5`)
- `exclude` Pass a regex string to exclude directories from printing
- `config` The path to the dree configuration file

## Outputs

- `content` Directory tree structure text

## See Also

- [Github Release Changelog Generator](https://github.com/jaywcjlove/changelog-generator) A GitHub Action that compares the commit differences between two branches
- [Create Tags From](https://github.com/jaywcjlove/create-tag-action) Auto create tags from commit or package.json.
- [Github Action Contributors](https://github.com/jaywcjlove/github-action-contributors) Github action generates dynamic image URL for contributor list to display it!
- [Generated Badges](https://github.com/jaywcjlove/generated-badges) Create a badge using GitHub Actions and GitHub Workflow CPU time (no 3rd parties servers)
- [Create Coverage Badges](https://github.com/jaywcjlove/coverage-badges-cli) Create coverage badges from coverage reports. (no 3rd parties servers)
- [Github Action package](https://github.com/jaywcjlove/github-action-package) Read and modify the contents of `package.json`.
- [Github Action EJS](https://github.com/jaywcjlove/github-action-package) A github action to render a ejs template using github context.
- [Modify File Content](https://github.com/jaywcjlove/github-action-modify-file-content) Replace text content and submit content.

## License

Licensed under the MIT License.
