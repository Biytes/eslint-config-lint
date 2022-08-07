/**
 * @Usage extends: [require.resolve(filePath/promise.js)]
 * @description 该规则主要提供与promise书写习惯相关的规则
 */

module.exports = {
    plugins: ['promise'],
    rules: {
        // 1. 在then里一定要return一个值
        // 2. 可以throw error 效果等同于 return Promise.reject()
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/always-return.md
        'promise/always-return': 'off',

        // 不要重写一个新的promise实例
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/rules/avoid-new.js
        'promise/avoid-new': 'off',

        // 希望每个promise 都包含then和catch
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/catch-or-return.md
        'promise/catch-or-return': [
            'warn',
            {
                allowThen: true, // 允许写法 .then(null, fn)
                allowFinally: true, // 允许finally 在 catch 后面
                terminationMethod: ['catch', 'asCallback', 'finally'] // 允许使用asCallback 当作结束的方法
            }
        ],

        // 强制new Promise(resolve, reject) 不能使用其他名字
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/param-names.md
        'promise/param-names': 'error', // 只能用 resolve，reject

        // 如果在es5的环境下，要使用bluebird的时候，不能直接使用Promise.resolve(x)
        // 推荐 const Promise = require('bluebird')
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-native.md
        // 什么是bluebird  bluebird is a full featured promises
        'promise/no-native': 'off',

        // 避免在then里 return一个promise的then，希望用链路的形式往下执行 -【具体例子看下面链接】
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-nesting.md
        'promise/no-nesting': 'off',

        // 支持安全回调函数
        // https://github.com/xjamundx/eslint-plugin-promise/issues/220 // 支持的格式
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-callback-in-promise.md
        'promise/no-callback-in-promise': 'off', //「建议先关闭」

        // 在使用Promise的源生函数的时候，不要在前面加new
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-new-statics.md
        'promise/no-new-statics': 'error',

        // 不要在finally return东西
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-return-in-finally.md
        'promise/no-return-in-finally': 'off',

        // 确保promise的内置方法，都传入合适数量的参数
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/valid-params.md
        'promise/valid-params': 'warn',

        // 希望使用await instead of then [ES2017语法]
        // https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-then.md
        'promise/prefer-await-to-then': 'off'
    }
};
