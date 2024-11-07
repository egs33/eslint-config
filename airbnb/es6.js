export const es6 = {
  'arrow-body-style': [
    'error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    },
  ],
  'arrow-spacing': ['error', { before: true, after: true }],
  'generator-star-spacing': ['error', { before: false, after: true }],
  'no-confusing-arrow': [
    'error', {
      allowParens: true,
    },
  ],
  'no-duplicate-imports': 'off',
  'no-new-symbol': 'error',
  'no-restricted-exports': [
    'error', {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],
  'no-restricted-imports': [
    'off', {
      paths: [],
      patterns: [],
    },
  ],
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': [
    'error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],
  'no-var': 'error',
  'object-shorthand': [
    'error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  'prefer-arrow-callback': [
    'error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  'prefer-const': [
    'error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
    'error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-numeric-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'symbol-description': 'error',
  'template-curly-spacing': 'error',
  'yield-star-spacing': ['error', 'after'],
};
