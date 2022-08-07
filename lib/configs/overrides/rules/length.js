/* 针对代码长度 */
module.exports = {
    rules: {
        // 设定代码最大行数
        // https://eslint.bootcss.com/docs/rules/max-len
        // ? 对应规则 printWidth: 120
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

        // ? 对应规则 printWidth: 120
        indent: ['error', 4],

        // 链式调用，不格式化，使用prettier的超出多少行再格式化
        // ? 对应规则 printWidth: 120
        'newline-per-chained-call': [0, { ignoreChainWithDepth: 7 }]
    }
};
