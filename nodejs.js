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
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-global/url-search-params': 'error',
  },
};
