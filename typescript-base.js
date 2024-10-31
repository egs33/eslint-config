// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import base from './base.js';

const config = [
  ...base,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      // disable eslint rules for use typescript-eslint rules
      'default-param-last': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-implied-eval': 'off',
      'no-new-func': 'off',
      'no-loss-of-precision': 'off',
      'no-loop-func': 'off',
      'no-magic-numbers': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      'no-throw-literal': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',

      camelcase: 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        // Allow camelCase functions (23.2), and PascalCase functions (23.8)
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],

      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error', {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'require-await': 'off',
      '@typescript-eslint/require-await': 'off',
      'no-return-await': 'off',
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],

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
      '@stylistic/type-annotation-spacing': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
];

export default config;
