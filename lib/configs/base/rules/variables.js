/**
 * @Usage extends: [require.resolve(filePath/variables.js)]
 * @description 该规则主要提供与变量相关的规则
 */
const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
    rules: {
        // 不能有未定义的变量
        // https://eslint.bootcss.com/docs/rules/no-undef
        'no-undef': 1,

        // 禁止出现未使用过的变量
        // https://eslint.bootcss.com/docs/rules/no-unused-vars
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // 永远不要直接使用undefined进行变量判断；
        // https://eslint.bootcss.com/docs/rules/no-undefined
        'no-undefined': 'off',

        // disallow use of variables before they are defined
        // https://eslint.bootcss.com/docs/rules/no-use-before-define
        'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

        // disallow use of undefined when initializing variables
        // https://eslint.bootcss.com/docs/rules/no-undef-init
        'no-undef-init': 'error',

        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 2,


        // disallow specific globals
        'no-restricted-globals': [
            'error',
            {
                name: 'isFinite',
                message:
            'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite'
            },
            {
                name: 'isNaN',
                message:
            'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan'
            }
        ].concat(confusingBrowserGlobals)
    }
};
