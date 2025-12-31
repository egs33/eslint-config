export const style = {
  camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
  'func-names': 'warn',
  '@stylistic/padding-line-between-statements': ['error', { blankLine: 'always', prev: 'directive', next: '*' }],
  'max-lines-per-function': [
    'off', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],
  'new-cap': [
    'error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-lonely-if': 'error',
  'no-multi-assign': ['error'],
  'no-nested-ternary': 'error',
  '@stylistic/no-spaced-func': 'off',
  'no-underscore-dangle': [
    'error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'one-var': ['error', 'never'],
  '@stylistic/one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
  '@stylistic/padded-blocks': [
    'error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-object-spread': 'error',
  'unicode-bom': ['error', 'never'],
};
