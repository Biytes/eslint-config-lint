/**
 * @Usage extends: [require.resolve(filePath/strict.js)]
 * @description 该规则主要提供相对比较严格的规则
 */

module.exports = {
    // 不允许在循环里有await，有则用Promise.all
    // https://eslint.bootcss.com/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // 在loop里不能有函数
    // https://eslint.bootcss.com/docs/rules/no-loop-func
    'no-loop-func': 'error'
};
