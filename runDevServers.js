const inquirer = require('inquirer')
const chalk = require('chalk')
const execa = require('execa')
const fuzzy = require('fuzzy')

const packageInfo = require('./packageInfo')

inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'))

inquirer.prompt([
  {
    type: 'checkbox-plus',
    name: 'serverChoices',
    message: 'Choose dev servers to run (<space> to toggle, <enter> to submit)',
    highlight: true,
    searchable: true,
    source: (_, input) => new Promise((resolve) => {
      const fuzzyResult = fuzzy.filter(
        input || '',
        packageInfo,
        {
          extract: ({ name }) => name
        }
      )

      resolve(fuzzyResult.map(element => element.original))
    })
  }
]).then(({ serverChoices }) => {
  console.log() // separator line

  serverChoices.forEach(
    ({ name, port, package }) => {
      console.log(
        chalk.blue('Server for ') +
        chalk.yellow.bold(`${name} (@akrawiel-sfc/${package})`) +
        chalk.blue(' will run at port ') +
        chalk.yellow.bold(port)
      )
    }
  )

  console.log(chalk.green.bold('\nRunning selected Lerna packages... (press Ctrl+C to stop)\n'))

  const scopedPackages = serverChoices.map(
    ({ package }) => `--scope=@akrawiel-sfc/${package}`
  )

  execa(
    'lerna',
    [
      'run',
      'dev',
      ...scopedPackages,
      '--stream',
      '--loglevel=notice'
    ],
    {
      stdio: 'inherit'
    }
  )
})
