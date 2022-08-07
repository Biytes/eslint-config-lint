/**
 * @description 该包只存放 覆盖与vue 冲突的prettier规则
 * @Usage extends: [require.resolve('../rules/_override_vue-prettier')]
 */

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // https://eslint.vuejs.org/rules/html-indent.html
        // template的间隔 应该为4格
        'vue/html-indent': [0, 4],

        // https://eslint.vuejs.org/rules/max-attributes-per-line.html
        // 一行最大属性数，超过则换行
        // ? 对应冲突规则: printWidth
        'vue/max-attributes-per-line': 'off',

        // https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
        // 对于多行元素，强制换行
        // ? 对应冲突规则: printWidth
        'vue/multiline-html-element-content-newline': 'off',

        // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
        // 对于单行元素，强制换行
        // ? 对应冲突规则: printWidth
        'vue/singleline-html-element-content-newline': 'off'
    }
};
