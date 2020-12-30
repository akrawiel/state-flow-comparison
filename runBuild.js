const inquirer = require('inquirer')
const chalk = require('chalk')
const lerna = require('lerna')

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

  const joinedServerChoices = buildChoices.map(({ package }) => package).join(",")
  lerna(`run build --scope={${joinedServerChoices},} --stream --loglevel=notice`)
})
