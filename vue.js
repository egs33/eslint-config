module.exports = {
  extends: ['airbnb-base'],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es2017: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  rules: {
    'func-style': ['error', 'expression'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
