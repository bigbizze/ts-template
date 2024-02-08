#!/bin/bash


if [[ ! -f uninstalled ]]; then
  exit 0
fi

node package.json-modify.js
npx rimraf package.json-modify.js
yarn remove git-user-name
npx rimraf uninstalled
npx rimraf .git
npx rimraf .idea
npx rimraf setup.sh

