const inquirer = require('inquirer')
const chalk = require('chalk')
const lerna = require('lerna')

const packageInfo = require('./packageInfo')

inquirer.prompt([
  {
    type: 'checkbox',
    name: 'serverChoices',
    message: 'Choose dev servers to run',
    choices: packageInfo
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

  const joinedServerChoices = serverChoices.map(({ package }) => package).join(",")
  lerna(`run dev --scope={${joinedServerChoices},} --stream --loglevel=notice`)
})
