import { FlatCompat } from '@eslint/eslintrc';
import promise from 'eslint-plugin-promise';
import { rules as PromiseRules } from './plugin-rules/promise.js';

const compat = new FlatCompat();

export default [
  {
    languageOptions: {
      ecmaVersion: 2023,
      parserOptions: {
        // avoid import plugin error
        ecmaVersion: 2023,
      },
    },
    plugins: { promise },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
    },
  },
  ...compat.extends('eslint-config-airbnb-base'),
  ...compat.extends('plugin:eslint-plugin-array-func/all'),
  ...compat.extends('plugin:eslint-plugin-regexp/recommended'),
  {
    languageOptions: {
      // overwrite plugin-array-func
      ecmaVersion: 2023,
    },
    rules: {
      'no-plusplus': 'off',
      'no-continue': 'off',
      'func-style': 'error',
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'max-lines': ['error', { max: 500, skipComments: true }],
      // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L6
      'array-bracket-newline': 'error',
      'array-func/prefer-array-from': 'off',
      ...PromiseRules,
    },
  },
];
