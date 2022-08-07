/**
 * @Usage extends: [plugin:@nostalgiaswag/lint/base]
 * @description 该规则主要提供 小鹅通 js 「最基础的规范」的规则
 */

module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        requireConfigFile: false,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['babel'],
    extends: [
        'eslint:recommended',
        require.resolve('./rules/common'),
        require.resolve('./rules/errors'),
        require.resolve('./rules/es6'),
        require.resolve('./rules/variables'),
        require.resolve('./rules/style'),
        require.resolve('../advance/promise')
    ],
    env: {
        es6: true,
        browser: true,
        node: true
    },
    globals: {
        uni: true,
        wx: true
    },

    rules: {}
};
