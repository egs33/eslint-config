import { FlatCompat } from '@eslint/eslintrc';
import base from './base.js';

const compat = new FlatCompat();

const a = [
  ...base,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended-requiring-type-checking'),
  ...compat.extends('airbnb-typescript/base'),
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
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
    },
  },
];

export default a;
