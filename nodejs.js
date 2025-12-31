import node from 'eslint-plugin-n/configs/recommended-module.js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import base from './base.js';

export default defineConfig([
  ...base,
  node,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'n/no-path-concat': 'error',
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/console': 'error',
      'n/prefer-global/url': 'error',
      'n/prefer-global/url-search-params': 'error',
      'import/extensions': ['error', 'always', { ignorePackages: true }],
    },
  },
]);
