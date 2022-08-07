/**
 * @Usage extends: ['plugin:@nostalgiaswag/lint/vue']
 * @description 该规则主要提供 使用了vue3 项目的规则
 */

module.exports = {
    extends: [require.resolve('../overrides/_override_vue3')]
};
