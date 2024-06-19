function sortFile(file) {
  const list = file.split('\n')
  const newData = list.slice(1)
  return `${list[0]}${newData.sort().join('\n')}\n`
}

function sortPart(file, start, end) {
  const s = file.indexOf(start, 0)
  const e = file.indexOf(end, s)
  const filePart = file.slice(s, e).split('\n')
  const toSort = filePart.slice(1, -1)
  const sorted = toSort.sort()
  const sortedPart = [filePart[0], ...sorted].join('\n')
  const newFile = file.slice(0, s) + sortedPart + '\n' + file.slice(e)
  return newFile
}

function pascalCase(text) {
  return text
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

module.exports = function (plop) {
  plop.setGenerator('icon', {
    description: 'Generate an tsx icon to use with the Icon Component',
    prompts: [
      {
        type: 'input',
        name: 'icon',
        message: 'The name of the icon',
        validate: function (value) {
          if (/.+/.test(value)) {
            return true
          }
          return 'Icon name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/assets/icons/tsx/{{pascalCase icon}}.tsx',
        templateFile: 'templates/icon/icon.tsx.hbs',
      },
      {
        type: 'modify',
        path: 'src/assets/icons/index.ts',
        pattern: /(\/\/ Icon exports)/g,
        transform: template => sortFile(template),
        template: "$1\nexport * from './tsx/{{pascalCase icon}}'",
      },
      {
        type: 'modify',
        path: 'src/components/Icon/Icon.tsx',
        pattern: /(iconRegistry = {)/g,
        transform: template => sortPart(template, 'iconRegistry = {', '}'),
        template: '$1\n  {{camelCase icon}}: icons.{{pascalCase icon}},',
      },
    ],
  })
  plop.setGenerator('hook', {
    description: 'Generate a custom hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'hook name(without "use" prefix)',
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Do you want to create a test file?',
        default: false,
      },
    ],
    actions: data => {
      let actions = [
        {
          type: 'add',
          path: 'src/hooks/use{{pascalCase name}}.ts',
          templateFile: 'templates/hooks/hook.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/hooks/index.ts',
          pattern: /(\/\/ Export custom hooks)/g,
          transform: template => sortFile(template),
          template: "$1\nexport * from './use{{pascalCase name}}'",
        },
      ]

      if (data && data.withTest) {
        actions.push({
          type: 'add',
          path: 'src/hooks/__tests__/use{{pascalCase name}}.test.ts',
          templateFile: 'templates/hooks/hook.test.ts.hbs',
        })
      }

      return actions
    },
  })
}
