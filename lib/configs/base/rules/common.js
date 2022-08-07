/**
 * @Usage extends: [require.resolve(filePath/common.js)]
 * @description 该规则主要提供与纠正平时书写习惯相关的规则
 */

module.exports = {
    rules: {
        // 强制setter 和 getter都要有
        // https://eslint.bootcss.com/docs/rules/accessor-pairs
        'accessor-pairs': 'off',

        // 循环复杂度测量程序源代码中线性独立路径的数量。该规则允许设置圈复杂度阈值 默认20
        // https://eslint.bootcss.com/docs/rules/complexity
        complexity: [1, 20],

        // 数组函数返回一定要有return
        // https://eslint.bootcss.com/docs/rules/array-callback-return
        'array-callback-return': ['error', { allowImplicit: true }],

        // treat var statements as if they were block scoped
        // https://eslint.bootcss.com/docs/rules/block-scoped-var
        'block-scoped-var': 'error',

        // 类的静态方法没用this的时候，用类本身去调用
        // https://eslint.bootcss.com/docs/rules/class-methods-use-this
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: []
            }
        ],

        // for in循环要用if语句过滤【严格】
        // https://eslint.bootcss.com/docs/rules/guard-for-in
        'guard-for-in': 0,

        // 禁止扩展原生对象
        // https://eslint.bootcss.com/docs/rules/no-extend-native
        'no-extend-native': 'error',

        // 禁用 alert、confirm 和 prompt
        // https://eslint.bootcss.com/docs/rules/no-alert
        'no-alert': 'error',

        // 禁止对null使用==或!=运算符
        // https://eslint.bootcss.com/docs/rules/no-eq-null
        'no-eq-null': 'error',

        // disallow use of eval()
        // https://eslint.bootcss.com/docs/rules/no-eval
        'no-eval': 'error',

        // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
        // https://eslint.bootcss.com/docs/rules/default-case
        'default-case': ['error', { commentPattern: '^no default$' }],

        // default语句要在最后
        // https://eslint.bootcss.com/docs/rules/default-case-last
        'default-case-last': 'error',

        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题
        // https://eslint.bootcss.com/docs/rules/no-empty-function
        'no-empty-function': [2, { allow: ['generatorMethods', 'arrowFunctions', 'methods'] }],

        // 禁用不必要的嵌套块
        // https://eslint.bootcss.com/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',

        // 禁止使用多个空格
        // https://eslint.bootcss.com/docs/rules/no-multi-spaces
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: false
            }
        ],

        // 「loose」立即执行函数
        // TODO 无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；函数调用括号前不需要空格；[强制]
        // https://eslint.bootcss.com/docs/rules/wrap-iife.html
        'wrap-iife': ['error', 'any'],

        // require the use of === and !==
        // https://eslint.bootcss.com/docs/rules/eqeqeq
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // 要求所有的 var 声明出现在它们所在的作用域顶部
        // https://eslint.bootcss.com/docs/rules/vars-on-top
        'vars-on-top': 'error',

        // disallow comparisons where both sides are exactly the same
        // 禁止自身比较
        // https://eslint.bootcss.com/docs/rules/no-self-compare
        'no-self-compare': 'error',

        // disallow magic numbers
        // 禁用魔术数字(3.14什么的用常量代替)
        // https://eslint.bootcss.com/docs/rules/no-magic-numbers
        'no-magic-numbers': [
            'off',
            {
                ignore: [],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false
            }
        ],

        // disallow implicit type conversions
        // 禁止隐式转换
        // https://eslint.bootcss.com/docs/rules/no-implicit-coercion
        'no-implicit-coercion': [
            'off',
            {
                boolean: false,
                number: true,
                string: true,
                allow: []
            }
        ],

        // disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': 'error',

        // disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // disallow the use of leading or trailing decimal points in numeric literals
        // https://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 'error',

        // disallow redundant `return await`
        // https://eslint.org/docs/rules/no-return-await
        'no-return-await': 'error',

        // disallow use of comma operator
        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 'error',
        
        // disallow unmodified conditions of loops
        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'off'
    }
};
