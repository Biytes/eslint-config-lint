/**
 * @Usage extends: ['plugin:@xiaoe/lint/base-loose']
 * @description 该包主要是用于接入eslint，但是没时间改的项目，可以先将频发的规则降低提示强度，后续再开放严格规则
 * @external 如果该包的规则还是太严格，或者影响开发，请根据包内的规则进行本地覆盖调整
 */

module.exports = {
    root: true,
    extends: [require.resolve('../base')],
    rules: {
        // 检验驼峰，不检查子类
        camelcase: [0, { properties: 'never', ignoreDestructuring: true }],

        // 建议使用全等, 特殊情况才用 ==
        eqeqeq: 1,

        // 循环复杂度测量程序源代码中线性独立路径的数量。该规则允许设置圈复杂度阈值 默认20
        complexity: [1, 20],

        // 缩进
        indent: [
            0,
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1
                },
                CallExpression: {
                    arguments: 1
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild'
                ],
                ignoreComments: false
            }
        ]
    }
};
