module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2021,
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
    'max-lines': ['error', { max: 500, skipComments: true }],
  },
};
