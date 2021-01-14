const execa = require('execa')
const fuzzy = require('fuzzy')
const figures = require('figures')

const React = require('react')
const Ink = require('ink')

const packageInfo = require('./packageInfo')

const h = React.createElement

const maxRenderedItems = 5;

function CommandSelector() {
  const [newText, setNewText] = React.useState('')
  const [cursorVisible, setCursorVisible] = React.useState(true)
  const [isInputActive, setIsInputActive] = React.useState(true)
  const [activePackages, setActivePackages] = React.useState([])
  const [cursorPosition, setCursorPosition] = React.useState(0)

  const { exit } = Ink.useApp()

  React.useEffect(() => {
    let currentCursorVisible = cursorVisible;

    const cursorInterval = setInterval(
      () => {
        currentCursorVisible = !currentCursorVisible
        setCursorVisible(currentCursorVisible)
      },
      500
    )

    return () => {
      clearInterval(cursorInterval)
    }
  }, [])

  const filteredPackages = React.useMemo(
    () => fuzzy.filter(
      newText,
      packageInfo,
      {
        extract: ({ name }) => name
      }
    ).slice(0, maxRenderedItems),
    [newText]
  )

  const selectedPackages = React.useMemo(
    () => packageInfo.filter(
      ({ package }) => activePackages.includes(package)
    ),
    [activePackages]
  )

  Ink.useInput((input, key) => {
    if (!isInputActive) return

    if (key.tab) {
      const selectedPackage = filteredPackages[cursorPosition]

      if (!selectedPackage) return

      if (activePackages.includes(selectedPackage.original.package)) {
        setActivePackages(activePackages.filter(package => package !== selectedPackage.original.package))
      } else {
        setActivePackages([...activePackages, selectedPackage.original.package])
      }
    } else if (key.return) {
      if (activePackages.length === 0) {
        console.error('No packages selected')
      } else {
        setIsInputActive(false)

        setTimeout(() => {
          const scopedPackages = selectedPackages.map(
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
          ).then(() => {
            exit()
          })
        })
      }
    } else if (key.backspace || key.delete) {
      setCursorPosition(0)
      setNewText(newText.slice(0, -1))
    } else if (/^[\w-+ ]$/.test(input)) {
      setCursorPosition(0)
      setNewText(newText + input)
    } else if (key.downArrow) {
      setCursorPosition(((cursorPosition + 1) % maxRenderedItems + maxRenderedItems) % maxRenderedItems)
    } else if (key.upArrow) {
      setCursorPosition(((cursorPosition - 1) % maxRenderedItems + maxRenderedItems) % maxRenderedItems)
    }
  })

  return isInputActive
    ? h(React.Fragment, {}, 
      h(Ink.Text, { dimColor: 'grey' }, 'Select packages to build'),
      h(Ink.Box, { width: '100%' }, 
        h(Ink.Text, { dimColor: 'grey' }, '<tab> to toggle, <enter> to build selected '),
        h(Ink.Text, {}, `${newText}${cursorVisible ? '|' : ''}`)
      ),
      filteredPackages.length === 0
        ? h(Ink.Text, {}, 'No packages found')
        : filteredPackages.map(
          ({ string, original: { package } }, index) => {
            return h(
              Ink.Text,
              { key: package },
              `${index === cursorPosition ? figures.pointer : ' '} ${activePackages.includes(package) ? figures.tick : ' '} ${string}`
            )
          }
        )
    )
    : h(React.Fragment, {},
      h(Ink.Text, { color: 'green', bold: true }, 'Running selected packages build processes... (Ctrl+C to stop)'),
      selectedPackages.map(
        ({ package, name, buildDirectory }) => h(
          Ink.Text,
          { color: 'blueBright', bold: true, key: package },
          `Bundle for ${name} (${package}) will be placed in packages/${package}/${buildDirectory}`
        ),
      ),
      h(Ink.Newline)
    )
}

Ink.render(h(CommandSelector))
