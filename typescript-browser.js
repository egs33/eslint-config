import { defineConfig } from 'eslint/config';
import browser from './browser.js';
import typescriptBase from './typescript-base.js';

export default defineConfig([
  ...browser,
  ...typescriptBase,
]);
