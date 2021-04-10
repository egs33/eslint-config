module.exports = {
  extends: [
    './nodejs',
    './typescript-base',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
  },
};
