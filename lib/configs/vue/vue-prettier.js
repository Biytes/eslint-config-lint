/**
 * @Usage extends: ['plugin:@xiaoe/lint/vue-prettier']
 * @description 该规则主要提供 使用了prettier的 vue2项目 的规则
 */

module.exports = {
    extends: [
        require.resolve('../overrides/_override_js-prettier'),
        require.resolve('./vue'),
        require.resolve('../overrides/_override_vue-prettier')
    ]
};
