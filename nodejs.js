module.exports = {
  extends: [
    './base',
    'plugin:node/recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    'node/no-path-concat': 'error',
  },
};
