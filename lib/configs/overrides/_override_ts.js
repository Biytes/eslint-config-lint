// @ts-check
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        jsx: true
    },

    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],

    rules: {
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        // Require that member overloads be consecutive (adjacent-overload-signatures
        // 要求成员重载是连续的（相邻的重载签名）
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
        // 统一数组类型的写法
        '@typescript-eslint/array-type': [1, { ArrayTypeOption: 'array' }],

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.md
        // 禁止await 返回一个无法then的函数
        // '@typescript-eslint/await-thenable': 1,
        
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
        // TypeScript提供了几个指令注释，可用于更改其处理文件的方式。使用这些来抑制TypeScript编译器错误会降低TypeScript的整体效率。
        '@typescript-eslint/ban-ts-comment': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
        '@typescript-eslint/no-namespace': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.md
        // 格式化定义方法
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
        // 转化对象定义方式
        '@typescript-eslint/consistent-indexed-object-style': [
            'error',
            'record'
        ],

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

        // https://github.com/typescript-eslint/typescript-eslint/blob/0cd911a916805d3b1f8043584e4685f3edd5c427/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': 'off'
    }
};
 