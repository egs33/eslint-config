module.exports = {
  'promise/always-return': 'off',
  'promise/no-return-wrap': 'error',
  'promise/param-names': 'error',
  'promise/catch-or-return': 'off',
  'promise/no-native': 'off',
  // using multi promises require nesting sometimes
  'promise/no-nesting': 'off',
  'promise/no-promise-in-callback': 'error', // OK?
  'promise/no-callback-in-promise': 'error',
  'promise/avoid-new': 'off',
  'promise/no-new-statics': 'error',
  'promise/no-return-in-finally': 'warn',
  'promise/valid-params': 'error',
  'prefer-await-to-then': 'off',
  'prefer-await-to-callbacks': 'off',
};
