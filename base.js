module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es2020: true,
  },
  rules: {
    'no-plusplus': 'off',
    'no-continue': 'off',
    'func-style': ['error', 'expression'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
};
