import { defineConfig } from 'eslint/config';
import nodejs from './nodejs.js';
import typescriptBase from './typescript-base.js';

export default defineConfig([
  ...nodejs,
  ...typescriptBase,
  {
    rules: {
      'n/no-missing-import': 'off',
    },
  },
]);
