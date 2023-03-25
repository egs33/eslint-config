module.exports = {
  extends: [
    './nodejs',
    './typescript-base',
  ],
  rules: {
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-missing-import': 'off',
  },
};
