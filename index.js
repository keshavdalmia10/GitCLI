const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const github = require('./lib/github')

clear();

console.log(
  chalk.blue(
    figlet.textSync('GitCLI', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a Git repository!'));
  process.exit();
}
const run = async () => {
  let token = github.getStoredGithubToken();
  if(!token) {
    token = await github.getPersonalAccesToken();
  }
  console.log(token);
};
