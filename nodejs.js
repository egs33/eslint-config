module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es2017: true,
    node: true,
  },
  rules: {
    'func-style': ['error', 'expression'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};