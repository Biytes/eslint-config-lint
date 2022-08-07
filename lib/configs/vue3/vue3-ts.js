/**
 * @Usage extends: ['plugin:@xiaoe/lint/vue-ts']
 * @description 该规则主要提供 vue3, base的规则
 */

// @ts-check
module.exports = {
    root: true,
    extends: [
        '@vue/typescript', // 不能用在prettier https://www.npmjs.com/package/@vue/eslint-config-typescript
        '@vue/typescript/recommended',
        require.resolve('../overrides/_override_ts.js'),
        require.resolve('../overrides/_override_vue3.js')
    ],
    rules: {
        // TODO: 更新覆盖@vue/typescript的规则
    }
};
