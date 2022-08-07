/**
 * @Usage extends: [require.resolve(filePath/errors.js)]
 * @description 该规则主要提供与常规错误相关的规则
 */

module.exports = {
    rules: {
        // 不能有debugger, 开发环境警告
        // https://eslint.bootcss.com/docs/rules/no-debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,

        // 在生产环境警告，开发环境忽略
        // https://eslint.bootcss.com/docs/rules/no-console
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,

        // 禁止对象字面量中出现重复的 key
        // https://eslint.bootcss.com/docs/rules/no-dupe-keys
        'no-dupe-keys': 'error',

        // 禁止 function 定义中出现重名参数
        // https://eslint.bootcss.com/docs/rules/no-dupe-args
        'no-dupe-args': 'error',

        // 禁止空语句块
        // https://eslint.bootcss.com/docs/rules/no-empty
        'no-empty': 'error',

        // 禁止不必要的布尔转换
        // https://eslint.bootcss.com/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // 禁止在嵌套的块中出现 function 或 var 声明
        // https://eslint.bootcss.com/docs/rules/no-inner-declarations
        'no-inner-declarations': ['error', 'functions'],

        //在条件语句中不要使用赋值语句
        // https://eslint.bootcss.com/docs/rules/no-cond-assign
        'no-cond-assign': ['error', 'always'],

        //禁止在条件中使用常量表达式 if(true) if(1)
        // https://eslint.bootcss.com/docs/rules/no-constant-condition
        'no-constant-condition': 'error',

        //「loose」 此规则不允许正则表达式中的控制字符
        // https://eslint.bootcss.com/docs/rules/no-control-regex
        'no-control-regex': 1,

        // 推荐使用Object.prototype.hasOwnProperty.call(obj, key)去判断当前key是否存在
        // https://eslint.bootcss.com/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // ! 不要在应该做比较的地方做赋值；[强制]
        // https://eslint.bootcss.com/docs/rules/no-prototype-builtins
        'no-sparse-arrays': 'error', //禁止稀疏数组， [1,,2]

        // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        // https://eslint.bootcss.com/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // Avoid code that looks like two expressions but is actually one
        // https://eslint.bootcss.com/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error'
    }
};
