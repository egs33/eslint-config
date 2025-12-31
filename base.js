import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
import array from 'eslint-plugin-array-func';
import stylistic from '@stylistic/eslint-plugin';
import eslintJs from '@eslint/js';
import { configs as regexpConfig } from 'eslint-plugin-regexp';
import { rules as PromiseRules } from './plugin-rules/promise.js';
import { rules as StyleRules } from './plugin-rules/stylistic.js';
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
  importPlugin.flatConfigs.recommended,
  stylistic.configs.customize({
    arrowParens: false,
    blockSpacing: true,
    braceStyle: '1tbs',
    commaDangle: 'always-multiline',
    flat: true,
    indent: 2,
    jsx: true,
    pluginName: '@stylistic',
    quoteProps: 'as-needed',
    quotes: 'single',
    semi: true,
  }),
  eslintJs.configs.recommended,
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
      'array-func/prefer-array-from': 'off',
      ...PromiseRules,
      ...StyleRules,
    },
  },
];
