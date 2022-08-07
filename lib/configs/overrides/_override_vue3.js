/**
 * @Usage extends: ['plugin:@nostalgiaswag/lint/vue']
 * @description 该规则主要提供 使用了vue3 项目的规则
 */

module.exports = {
    // https://blog.csdn.net/landiyaaa/article/details/105410748
    parser: 'vue-eslint-parser',

    extends: [
        require.resolve('../base'), // 基础规则
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended' // https://eslint.vuejs.org/rules/require-explicit-emits.html
    ],

    plugins: ['vue'],

    rules: {
        // https://eslint.vuejs.org/rules/script-setup-uses-vars.html
        'vue/script-setup-uses-vars': 'error',

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

        // https://eslint.vuejs.org/rules/attribute-hyphenation.html
        // template 的属性应该是data-name 而不是 dataName
        'vue/attribute-hyphenation': [
            'error',
            'always',
            {
                ignore: []
            }
        ],

        // https://eslint.vuejs.org/rules/require-default-prop.html
        // 需要给属性加上默认值，保证组件在没有传入值的时候也能正常进行
        'vue/require-default-prop': 'error',

        // https://eslint.vuejs.org/rules/require-explicit-emits.html
        // 希望emits 是使用已经定义的
        'vue/require-explicit-emits': 'off',

        // https://eslint.vuejs.org/rules/multi-word-component-names.html
        // 希望组件的名字是两个单词组成
        'vue/multi-word-component-names': 'off'

        // TODO: 添加部分规则
    }
};
