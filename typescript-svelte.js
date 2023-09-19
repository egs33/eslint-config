import svelteParser from 'svelte-eslint-parser';
// eslint-disable-next-line import/no-unresolved
import tsParser from '@typescript-eslint/parser';
import typescriptBrowser from './typescript-browser.js';

export default [
  ...typescriptBrowser,
  {
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.svelte'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.eslint.json',
        },
      },
    },
    rules: {
      'import/no-mutable-exports': 'off',
      'import/no-named-as-default': 'off',
      'svelte/infinite-reactive-loop': 'error',
      'svelte/no-dom-manipulating': 'error',
      'svelte/no-dupe-else-if-blocks': 'error',
      'svelte/no-dupe-on-directives': 'error',
      'svelte/no-dupe-style-properties': 'error',
      'svelte/no-dupe-use-directives': 'error',
      'svelte/no-dynamic-slot-name': 'error',
      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-not-function-handler': 'error',
      'svelte/no-object-in-text-mustaches': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-shorthand-style-property-overrides': 'error',
      'svelte/no-store-async': 'error',
      'svelte/no-unknown-style-directive-property': 'error',
      'svelte/require-store-callbacks-use-set-param': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/valid-compile': 'error',
      'svelte/valid-prop-names-in-kit-pages': 'error',

      'svelte/no-at-html-tags': 'error',
      'svelte/no-target-blank': 'off', // use noreferrer only is ok

      'svelte/block-lang': ['error', {
        script: ['ts', null],
        style: ['scss', null],
      }],
      'svelte/button-has-type': 'error',
      'svelte/no-at-debug-tags': 'warn',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-unused-class-name': 'error',
      'svelte/no-unused-svelte-ignore': 'error',
      'svelte/no-useless-mustaches': 'error',
      'svelte/prefer-destructured-store-props': 'warn', // 様子見
      'svelte/require-each-key': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/require-optimized-style-attribute': 'error',
      'svelte/require-stores-init': 'error',
      'svelte/valid-each-key': 'error',

      'svelte/derived-has-same-inputs-outputs': 'off',
      'svelte/first-attribute-linebreak': 'error',
      'svelte/html-closing-bracket-spacing': 'error',
      'svelte/html-quotes': 'error',
      'svelte/indent': 'error',
      indent: 'off',
      '@typescript-eslint/indent': 'off',
      'svelte/max-attributes-per-line': ['error', { singleline: 4 }],
      'svelte/mustache-spacing': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/no-restricted-html-elements': 'off',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
      'svelte/shorthand-attribute': 'error',
      'svelte/shorthand-directive': 'error',
      'svelte/sort-attributes': 'off',
      'svelte/spaced-html-comment': 'error',

      'svelte/no-inner-declarations': 'error',
      'svelte/no-trailing-spaces': 'error',

      'svelte/comment-directive': [
        'error',
        {
          reportUnusedDisableDirectives: true,
        },
      ],
      'svelte/system': 'error',
    },
  },
];
