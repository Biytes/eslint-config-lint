/**
 * @Usage extends: ['plugin:@nostalgiaswag/lint/vue']
 * @description 该规则主要提供 使用了vue 项目的规则
 */

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: false,
            jsx: true
        }
    },
    plugins: ['vue'],
    rules: {
        // https://eslint.vuejs.org/rules/html-indent.html
        // template的间隔 应该为4格
        'vue/html-indent': ['error', 4],

        // vue生命周期应该按照这个规则来
        // https://eslint.vuejs.org/rules/order-in-components.html
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'fetch',
                    'head',
                    'computed',
                    'watch',
                    'filters',
                    'watchQuery',
                    'created',
                    'beforeMount',
                    'mounted',
                    'beforeUpdate',
                    'updated',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'beforeUnmounted',
                    'unmounted',
                    'beforeDestroy',
                    'destroyed',
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ],

        // https://eslint.vuejs.org/rules/multi-word-component-names.html
        // 组件名称需要驼峰 【暂时关闭】
        'vue/multi-word-component-names': 0,

        // https://eslint.vuejs.org/rules/attributes-order.html
        // 所有vue template里的属性，按照这个顺序
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ],
                alphabetical: false
            }
        ],

        /* 由于prettier会有很多冲突，所以单独引入 */
        /* plugin:vue/strongly-recommended */

        // https://eslint.vuejs.org/rules/attribute-hyphenation.html
        // template 的属性应该是dataName
        'vue/attribute-hyphenation': [2, 'never'],
        // https://eslint.vuejs.org/rules/component-definition-name-casing.html
        // 组件的name 应该是 MyComponent
        'vue/component-definition-name-casing': ['error', 'PascalCase'],

        // https://eslint.vuejs.org/rules/no-template-shadow.html
        // v-for 的时候 定义的变量不应该 在内嵌v-for里继续定义相同的
        'vue/no-template-shadow': 'error',

        // https://eslint.vuejs.org/rules/prop-name-casing.html
        // 组件的属性一定要驼峰
        'vue/prop-name-casing': [1, 'camelCase'],

        // https://eslint.vuejs.org/rules/require-default-prop.html
        // 需要给属性加上默认值，保证组件在没有传入值的时候也能正常进行
        'vue/require-default-prop': 'error',

        // https://eslint.vuejs.org/rules/require-prop-types.html
        // 希望组件的属性有标明类型
        'vue/require-prop-types': 1,

        // https://eslint.vuejs.org/rules/v-bind-style.html
        // 推荐使用语法糖
        'vue/v-bind-style': ['error', 'shorthand'],

        // https://eslint.vuejs.org/rules/v-on-style.html
        // 推荐使用语法糖
        'vue/v-on-style': ['error', 'shorthand'],

        // https://eslint.vuejs.org/rules/v-slot-style.html
        // 暂不做要求
        'vue/v-slot-style': [
            1,
            {
                atComponent: 'shorthand',
                default: 'shorthand',
                named: 'shorthand'
            }
        ],

        // 自闭合
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],

        // 防止getters和actions等 vuex的问题
        'no-shadow': [2, { "allow": ['state', 'getters', 'actions'] }],
    }
};
