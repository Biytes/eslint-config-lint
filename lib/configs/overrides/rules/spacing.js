/* 针对代码间隔 */
module.exports = {
    rules: {
        // 花括号的空格 { a: 1 }
        // ? bracketSpacing: true
        // https://eslint.bootcss.com/docs/rules/ 搜索spacing

        // 逗号前不能有空格，逗号后要有空格
        // https://eslint.bootcss.com/docs/rules/comma-spacing
        'comma-spacing': [1, { before: false, after: true }],

        // 强制在对象字面量的属性中键和值之间使用一致的间距
        // https://eslint.bootcss.com/docs/rules/key-spacing
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true
            }
        ],

        // 强制在关键字前后使用一致的空格
        // https://eslint.bootcss.com/docs/rules/keyword-spacing
        'keyword-spacing': [
            'warn',
            {
                // 在关键字后至少需要一个空格
                after: true
            }
        ],

        // 箭头函数中的箭头前后需要留空格
        // https://eslint.bootcss.com/docs/rules/arrow-spacing
        'arrow-spacing': [
            'warn',
            {
                before: true,
                after: true
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
        ]
    }
};
