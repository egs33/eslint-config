module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es2017: true,
  },
  rules: {
    'no-plusplus': 0,
    'no-continue': 0,
    'func-style': ['error', 'expression'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
