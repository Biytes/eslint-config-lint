/**
 * @Usage extends: [require.resolve(filePath/es6.js)]
 * @description 该规则主要提供与es6相关的
 */

module.exports = {
    rules: {
        // 箭头函数 => 单个变量的时候，不需要加括号
        // https://eslint.bootcss.com/docs/rules/arrow-parens
        'arrow-parens': ['error', 'as-needed'],

        // 在定义变量的时候，如果变量后续没有被更改，自动转成const
        // https://eslint.bootcss.com/docs/rules/prefer-const
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true
            }
        ],

        //使用let和const代替var
        // https://eslint.bootcss.com/docs/rules/no-var
        'no-var': 'error',

        // 箭头函数中的箭头前后需要留空格
        // https://eslint.bootcss.com/docs/rules/arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],

        // 对象赋值简写
        // require method and property shorthand syntax for object literals
        // https://eslint.bootcss.com/docs/rules/object-shorthand
        'object-shorthand': ['error', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true
        }],

        // const 不能重新赋值
        // disallow modifying variables that are declared using const
        // https://eslint.bootcss.com/docs/rules/no-const-assign
        'no-const-assign': 'error',

        // 不需要没用的计算属性
        // disallow useless computed property keys
        // https://eslint.bootcss.com/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.bootcss.com/docs/rules/no-useless-rename
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }],

        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }],

        // use rest parameters instead of arguments
        // https://eslint.bootcss.com/docs/rules/prefer-rest-params
        'prefer-rest-params': 'error',

        // suggest using template literals instead of string concatenation
        // https://eslint.bootcss.com/docs/rules/prefer-template
        'prefer-template': 'error',

        // enforce usage of spacing in template strings
        // https://eslint.bootcss.com/docs/rules/template-curly-spacing
        // ${ a } => ${a} 
        'template-curly-spacing': 'error'
    }
};
