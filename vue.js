module.exports = {
  extends: ['./browser', 'plugin:vue/recommended'],
  plugins: ['vue'],
  // parser: 'vue-eslint-parser',
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 4,
    }],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
  },
};
