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
  plop.setHelper('if_eq', function (a, b, opts) {
    if (a == b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  })
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
  plop.setGenerator('domain', {
    description: 'Generate an API communication',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'domain name',
      },
      {
        type: 'list',
        name: 'method',
        message: 'Select the HTTP method',
        choices: [
          {
            name: 'Get',
            value: 'get',
            checked: true,
          },
          {
            name: 'Post',
            value: 'post',
          },
        ],
      },
      {
        type: 'confirm',
        name: 'withMock',
        message: 'Do you want to create a mocks file?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'withUseCase',
        message: 'Do you want to create an useCase?',
        default: true,
      },
      {
        type: 'input',
        name: 'useCaseName',
        message: 'useCase name(without "use" prefix)',
      },
      {
        type: 'list',
        name: 'getMode',
        message: 'Select the response mode',
        choices: [
          {
            name: 'Simple',
            value: 'simple',
            checked: true,
          },
          {
            name: 'Paginated',
            value: 'paginated',
          },
        ],
        when: answers => answers.method === 'get',
      },
    ],
    actions: data => {
      const actions = [
        {
          type: 'add',
          path: 'src/domain/{{pascalCase name}}/{{camelCase name}}Api.ts',
          templateFile: 'templates/domain/api.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/domain/{{pascalCase name}}/{{camelCase name}}Service.ts',
          templateFile: 'templates/domain/service.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/domain/{{pascalCase name}}/{{camelCase name}}Types.ts',
          templateFile: 'templates/domain/types.ts.hbs',
        },
        {
          type: 'modify',
          path: 'src/domain/index.ts',
          pattern: /(\/\/ Types)/g,
          transform: template => sortPart(template, 'Types', '// End Types'),
          template:
            "$1\nexport * from './{{pascalCase name}}/{{camelCase name}}Types'",
        },
        {
          type: 'modify',
          path: 'src/domain/index.ts',
          pattern: /(\/\/ Services)/g,
          transform: template =>
            sortPart(template, 'Services', '// End Services'),
          template:
            "$1\nexport * from './{{pascalCase name}}/{{camelCase name}}Service'",
        },
      ]
      if (data && data.withMock) {
        actions.push({
          type: 'add',
          path: 'src/domain/{{pascalCase name}}/{{camelCase name}}Mocks.ts',
          templateFile: 'templates/domain/mocks.ts.hbs',
        })
      }
      if (data && data.withUseCase) {
        actions.push({
          type: 'add',
          path: 'src/domain/{{pascalCase name}}/useCases/use{{pascalCase name}}Example.ts',
          templateFile: 'templates/domain/useCase.ts.hbs',
        })
        actions.push({
          type: 'add',
          path: 'src/domain/{{pascalCase name}}/useCases/index.ts',
          templateFile: 'templates/domain/index.ts.hbs',
        })
        actions.push({
          type: 'modify',
          path: 'src/domain/index.ts',
          pattern: /(\/\/ Use Cases)/g,
          transform: template =>
            sortPart(template, 'Use Cases', '// End Use Cases'),
          template: "$1\nexport * from './{{pascalCase name}}/useCases'",
        })
      }
      return actions
    }
  })
}
