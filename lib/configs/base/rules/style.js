/**
 * @Usage extends: [require.resolve(filePath/style.js)]
 * @description 该规则主要提供与代码风格相关的规则
 */

module.exports = {
    rules: {
        // https://eslint.bootcss.com/docs/rules/indent
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                },
                CallExpression: {
                    arguments: 1
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: true,
                // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild'
                ],
                ignoreComments: false
            }
        ],
        // 强制加分号
        // https://eslint.bootcss.com/docs/rules/semi
        semi: ['error', 'always'],

        // 设定代码最大行数
        // https://eslint.bootcss.com/docs/rules/max-len
        'max-len': [
            1,
            {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],

        // 建议使用单引号
        // https://eslint.bootcss.com/docs/rules/quotes
        quotes: ['error', 'single', { avoidEscape: true }],

        // 句尾不许留逗号
        // https://eslint.bootcss.com/docs/rules/comma-dangle
        'comma-dangle': [1, 'never'],

        // 逗号前不能有空格，逗号后要有空格
        // https://eslint.bootcss.com/docs/rules/comma-spacing
        'comma-spacing': [1, { before: false, after: true }],

        // 禁止 function 标识符和括号之间出现空格
        // https://eslint.bootcss.com/docs/rules/no-spaced-func
        'no-spaced-func': 'error',

        // 数组内括号换行
        // https://eslint.bootcss.com/docs/rules/array-bracket-newline
        'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

        // 强制可以嵌套块的最大深度
        // https://eslint.bootcss.com/docs/rules/max-depth
        'max-depth': ['error', 6],

        // 构造函数首字母大写
        // https://eslint.bootcss.com/docs/rules/new-cap
        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
            }
        ],

        // 强制 function 块最多允许的的声明行数
        // https://eslint.bootcss.com/docs/rules/max-statements
        'max-statements': [1, 40],

        // 单行最多声明1个
        // https://eslint.bootcss.com/docs/rules/max-statements-per-line
        'max-statements-per-line': ['off', { max: 1 }],

        //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
        // https://eslint.bootcss.com/docs/rules/key-spacing
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // 箭头函数中的箭头前后需要留空格
        // https://eslint.bootcss.com/docs/rules/keyword-spacing
        'keyword-spacing': [
            'error',
            {
                // 在关键字前至少需要一个空格
                before: true,
                // 在关键字后至少需要一个空格
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true }
                }
            }
        ],

        // 检验驼峰，不检查子类
        // https://eslint.bootcss.com/docs/rules/camelcase
        camelcase: [0, { properties: 'never', ignoreDestructuring: true }],

        // 规范 this 的别名 强制统一为that
        // https://eslint.bootcss.com/docs/rules/consistent-this
        'consistent-this': [1, 'that'],

        // 链式调用，格式化
        // https://eslint.bootcss.com/docs/rules/newline-per-chained-call
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // ! 单行注释 (如果依赖的Eslint不一致，修改Eslint配置) [强制]
        // 要求使用 JSDoc 注释
        // https://eslint.bootcss.com/docs/rules/require-jsdoc
        'require-jsdoc': 1,

        // limits the number of parameters that can be used in the function declaration.
        // 强制 function 定义中最多允许的参数数量
        // https://eslint.bootcss.com/docs/rules/max-params
        'max-params': [1, 5],

        // specify the max number of lines in a file
        // 一个文件最大行数
        // https://eslint.bootcss.com/docs/rules/max-lines
        'max-lines': [
            'off',
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true
            }
        ],

        // enforce a maximum function length
        // 一个函数最大长度
        // https://eslint.bootcss.com/docs/rules/max-lines-per-function
        'max-lines-per-function': [
            'off',
            {
                max: 100,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true
            }
        ],

        // 函数前面需要有空格
        // https://eslint.bootcss.com/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always', // 匿名函数括号前面不显示空格
                named: 'never',
                asyncArrow: 'always'
            }
        ],

        // require or disallow space before blocks
        // https://eslint.bootcss.com/docs/rules/space-before-blocks
        'space-before-blocks': 'error',

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        }
};
