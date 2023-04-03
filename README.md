# Greenfield Docs
This repository is the official repository for the BNB Greenfield documentation website. You can make changes 
to the documentation website by submitting a PR, if this is your first time submitting a PR to this repo, please
follow the [Documentation Writing Guidelines](DOC_WRITING_GUIDELINES.md).


## Stack
The documentation for Greenfield is hosted at https://docs.gnfd.io and built from the files in the /docs directory. 
It is built using the following stack:

- [Vuepress-theme-hope](https://theme-hope.vuejs.press/). A VuePress theme with tons of features
- GitHub pages

## Docs Build Workflow
The docs are built and deployed automatically on GitHub Pages by a GitHub Action workflow. 
The workflow is triggered on every push to the master branches, every time documentations or specs are modified.

## How to Build the Docs Locally

Requirement: 
1. node above v14.20
2. yarn above v1.22


``` shell
yarn install
yarn docs:dev
```

