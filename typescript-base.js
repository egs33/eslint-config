import { FlatCompat } from '@eslint/eslintrc';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import base from './base.js';

const compat = new FlatCompat();

const config = [
  ...base,
  { plugins: { '@typescript-eslint': tseslint.plugin } },
  ...tseslint.configs.strictTypeChecked.map((c) => ({ ...c, plugins: {} })),
  ...tseslint.configs.stylisticTypeChecked.map((c) => ({ ...c, plugins: {} })),
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
