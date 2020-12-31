const inquirer = require('inquirer')
const chalk = require('chalk')
const execa = require('execa')

const packageInfo = require('./packageInfo')

inquirer.prompt([
  {
    type: 'checkbox',
    name: 'buildChoices',
    message: 'Choose packages to build',
    choices: packageInfo
  }
]).then(({ buildChoices }) => {
  console.log() // separator line

  buildChoices.forEach(
    ({ name, buildDirectory, package }) => {
      console.log(
        chalk.blue('Bundle ') +
        chalk.yellow.bold(`${name} (${package})`) +
        chalk.blue(' will be placed in ') +
        chalk.yellow.bold(`packages/${package}/${buildDirectory}`)
      )
    }
  )

  console.log(chalk.green.bold('\nBuilding selected Lerna packages... (press Ctrl+C to stop)\n'))

  const joinedPackages = buildChoices.map(({ package }) => package).join(",")
  execa(
    'lerna',
    [
      'run',
      'build',
      `--scope={${joinedPackages},}`,
      '--stream',
      '--loglevel=notice'
    ],
    {
      stdio: 'inherit'
    }
  )
})
