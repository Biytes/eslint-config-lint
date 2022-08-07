/**
 * @Usage extends: ['plugin:@nostalgiaswag/lint/ugc']
 * @description 该规则主要提供 vue3, base的规则
 */

// @ts-check
module.exports = {
    extends: [
        '@vue/typescript/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        require.resolve('../overrides/_override_js-prettier'),
        require.resolve('../overrides/_override_ts'),
        require.resolve('../overrides/_override_vue3'),
        require.resolve('../overrides/_override_vue-prettier')
    ],
    rules: {}
};
