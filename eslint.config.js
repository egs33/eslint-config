import { defineConfig } from 'eslint/config';
import nodejs from './nodejs.js';

export default defineConfig([
  ...nodejs,
  {
    rules: {
      'import/no-default-export': 'off',
    },
  },
]);
