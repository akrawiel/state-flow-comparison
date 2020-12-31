const inquirer = require('inquirer')
const chalk = require('chalk')
const execa = require('execa')
const fuzzy = require('fuzzy')

const packageInfo = require('./packageInfo')

inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'))

inquirer.prompt([
  {
    type: 'checkbox-plus',
    name: 'buildChoices',
    message: 'Choose packages to build (<space> to toggle, <enter> to submit)',
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
]).then(({ buildChoices }) => {
  console.log() // separator line

  buildChoices.forEach(
    ({ name, buildDirectory, package }) => {
      console.log(
        chalk.blue('Bundle ') +
        chalk.yellow.bold(`${name} (@akrawiel-sfc/${package})`) +
        chalk.blue(' will be placed in ') +
        chalk.yellow.bold(`packages/${package}/${buildDirectory}`)
      )
    }
  )

  console.log(chalk.green.bold('\nBuilding selected Lerna packages... (press Ctrl+C to stop)\n'))

  const scopedPackages = buildChoices.map(
    ({ package }) => `--scope=@akrawiel-sfc/${package}`
  )

  execa(
    'lerna',
    [
      'run',
      'build',
      ...scopedPackages,
      '--stream',
      '--parallel',
      '--loglevel=notice'
    ],
    {
      stdio: 'inherit'
    }
  )
})
