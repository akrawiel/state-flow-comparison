const inquirer = require('inquirer')
const chalk = require('chalk')
const execa = require('execa')

const packageInfo = require('./packageInfo')

inquirer.prompt([
  {
    type: 'checkbox',
    name: 'serverChoices',
    message: 'Choose dev servers to run',
    choices: packageInfo,
  }
]).then(({ serverChoices }) => {
  console.log() // separator line

  serverChoices.forEach(
    ({ name, port, package }) => {
      console.log(
        chalk.blue('Server for ') +
        chalk.yellow.bold(`${name} (${package})`) +
        chalk.blue(' will run at port ') +
        chalk.yellow.bold(port)
      )
    }
  )

  console.log(chalk.green.bold('\nRunning selected Lerna packages... (press Ctrl+C to stop)\n'))

  const joinedPackages = serverChoices.map(({ package }) => package).join(",")
  execa(
    'lerna',
    [
      'run',
      'dev',
      `--scope={${joinedPackages},}`,
      '--stream',
      '--loglevel=notice'
    ],
    {
      stdio: 'inherit'
    }
  )
})
