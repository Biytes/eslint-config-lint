/**
 * @Usage extends: ['plugin:@xiaoe/lint/ugc']
 * @description 该规则主要提供 vue3, base的规则
 */

// @ts-check
module.exports = {
    extends: [require.resolve('./overrides/_override_ts')]
};
