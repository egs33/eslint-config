import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
import array from 'eslint-plugin-array-func';
import stylistic from '@stylistic/eslint-plugin';
import { configs as regexpConfig } from 'eslint-plugin-regexp';
import { rules as PromiseRules } from './plugin-rules/promise.js';
import { bestPractices } from './airbnb/best-practices.js';
import { errors } from './airbnb/errors.js';
import { style } from './airbnb/style.js';
import { variables } from './airbnb/variables.js';
import { es6 } from './airbnb/es6.js';
import { imports } from './plugin-rules/imports.js';

export default [
  {
    languageOptions: {
      ecmaVersion: 2023,
      parserOptions: {
        // avoid import plugin error
        ecmaVersion: 2023,
      },
    },
    plugins: { import: importPlugin, promise },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
    },
  },
  stylistic.configs.customize(),
  array.configs.all,
  regexpConfig['flat/recommended'],
  {
    rules: {
      ...bestPractices,
      ...errors,
      ...style,
      ...variables,
      ...es6,
      ...imports,
      'no-plusplus': 'off',
      'no-continue': 'off',
      'func-style': 'error',
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'max-lines': ['error', { max: 500, skipComments: true }],
      // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L6
      '@stylistic/array-bracket-newline': 'error',
      'array-func/prefer-array-from': 'off',
      ...PromiseRules,
    },
  },
];
