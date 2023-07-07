import nodejs from './nodejs.js';

export default [
  ...nodejs,
  {
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
