module.exports = {
  extends: [
    './base',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    node: true,
  },
  rules: {
    'node/no-path-concat': 'error',
  },
};
