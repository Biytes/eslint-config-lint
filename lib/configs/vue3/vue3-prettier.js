/**
 * @Usage extends: ['plugin:@xiaoe/lint/vue3-prettier']
 * @description 该规则主要提供 vue3, base的规则
 */

// @ts-check
module.exports = {
    root: true,
    extends: [
        require.resolve('../overrides/_override_js-prettier'),
        require.resolve('../overrides/_override_vue3'),
        require.resolve('../overrides/_override_vue-prettier')
    ]
};
