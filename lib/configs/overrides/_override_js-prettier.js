/**
 * @description 该包只存放 覆盖与eslint 冲突的prettier规则
 * @Usage extends: [require.resolve('../rules/_override_js-prettier')]
 * @external 可以用于ts，vue
 */

module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false
    },
    extends: [require.resolve('./rules/spacing'), require.resolve('./rules/length'), 'plugin:prettier/recommended'],
    rules: {
        // 多个三元运算符的时候会出问题
        indent: 0,

        // 去除一些不必要的换行
        'prettier/prettier': 0,

        // 函数是否强制括号
        // ? 对应规则 arrowParens: 'avoid'
        'arrow-parens': ['error', 'as-needed'],

        // 没有分号
        // ? 对应规则 semi: true
        semi: ['error', 'always'], // 禁止末尾分号

        // 单引号
        // ? 对应规则 singleQuote: true
        quotes: ['error', 'single', 'avoid-escape'],

        // 仅在需要时在对象属性周围添加引号 default
        // ? 对应规则 quoteProps: 'as-needed'
        'quote-props': [1, 'as-needed'],

        // jsx 不使用单引号 default
        // ? 对应规则 jsxSingleQuote: false
        'jsx-quotes': ['error', 'prefer-double'],

        // 对象，数组等没有尾随逗号
        // ? 对应规则 trailingComma: 'none'
        'comma-dangle': [1, 'never']
    }
};
