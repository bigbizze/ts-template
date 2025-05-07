#!/bin/bash


if [[ ! -f not-yet-installed ]]; then
  exit 0
fi

node package.json-modify.js
npx rimraf package.json-modify.js
yarn remove git-user-name
npx rimraf not-yet-installed
npx rimraf .git
npx rimraf .idea
npx rimraf setup.sh

