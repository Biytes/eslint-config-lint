/**
 * @Usage extends: ['plugin:@xiaoe/lint/vue']
 * @description 该规则主要提供 使用了vue2 项目的规则
 */

module.exports = {
    extends: [
        require.resolve('../base'),
        'plugin:vue/base', // 预防基础 https://eslint.vuejs.org/rules/comment-directive.html
        'plugin:vue/recommended', // 推荐的，最小化任意选择和认知开销 https://eslint.vuejs.org/rules/attributes-order.html
        'plugin:vue/essential', // 预防错误的 https://eslint.vuejs.org/rules/multi-word-component-names.html
        'plugin:vue/strongly-recommended', // 强烈推荐，提高可读性 https://eslint.vuejs.org/rules/attribute-hyphenation.html
        require.resolve('../overrides/_override_vue')
    ],
    rules: {}
};
