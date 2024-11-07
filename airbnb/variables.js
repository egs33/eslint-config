export const variables = {
  'no-label-var': 'error',
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],
  'no-shadow': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
};
