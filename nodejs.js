module.exports = {
  extends: [
    './base',
    'plugin:n/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    node: true,
  },
  rules: {
    'n/no-path-concat': 'error',
  },
};
