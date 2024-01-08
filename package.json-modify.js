
const packageJson = require('./package.json');

const folderName = require("path").basename(__dirname)

packageJson.name = folderName;

require("fs").writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
