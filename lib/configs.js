/**
 * @Usage extends: ['plugin:@xiaoe/lint/xxx', 'plugin:@xiaoe/lint/base-loose']
 * .eslintrc.js
 * @description 该文件负责导出配置的名称
 * @external 严格按照归类分放规则包
 */

module.exports = {
    base: require('./configs/base'),
    'base-loose': require('./configs/base/base-loose'), // 旧项目用这个规则覆盖
    ts: require('./configs/ts'),

    /* vue2 */
    vue: require('./configs/vue/vue'),
    // 使用了prettier 的 vue2 项目 可以使用该规则
    'vue-prettier': require('./configs/vue/vue-prettier'),

    /* vue3 */
    vue3: require('./configs/vue3/vue3'),
    'vue3-ts': require('./configs/vue3/vue3-ts'),
    'vue3-prettier': require('./configs/vue3/vue3-prettier'),
    'vue3-ts-prettier': require('./configs/vue3/vue3-ts-prettier')
};
