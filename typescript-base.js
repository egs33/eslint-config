import { FlatCompat } from '@eslint/eslintrc';
import base from './base.js';

const compat = new FlatCompat();

const config = [
  ...base,
  ...compat.extends('plugin:@typescript-eslint/strict-type-checked'),
  ...compat.extends('plugin:@typescript-eslint/stylistic-type-checked'),
  ...compat.extends('airbnb-typescript/base'),
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
];

export default config;
