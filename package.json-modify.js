
const packageJson = require('./package.json');
const path = require("path");
const { writeFileSync } = require("fs");

const folderName = path.basename(__dirname)

packageJson.name = folderName;

writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
