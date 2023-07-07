import nodejs from './nodejs.js';
import typescriptBase from './typescript-base.js';

export default [
  ...nodejs,
  ...typescriptBase,
  {
    rules: {
      'n/no-missing-import': 'off',
    },
  },
];
