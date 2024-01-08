// require os module

const getAuthor = () => {
  let userName;
  try {
    userName = require('git-user-name')();
  } catch {}
  if (!userName) {
    userName = require("os").userInfo()?.username;
  }
  return userName?.trim() ?? null;
}

const packageJson = require('./package.json');

const folderName = require("path").basename(__dirname)

packageJson.name = folderName;
packageJson.author = getAuthor();

delete packageJson.scripts["postinstall"];
delete packageJson.scripts["init-run"];
delete packageJson.scripts["modify-package-json"];

require("fs").writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
