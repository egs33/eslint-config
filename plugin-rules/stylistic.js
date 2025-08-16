export const rules = {
  '@stylistic/no-multi-spaces': [
    'error', {
      ignoreEOLComments: false,
    },
  ],
  '@stylistic/wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/indent': [
    'error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
        'TSUnionType',
        // stylistic plugin customize config ignores
        'TSIntersectionType',
        'TSTypeParameterInstantiation',
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
      ],
      ignoreComments: false,
    },
  ],
  '@stylistic/jsx-quotes': ['error', 'prefer-double'],
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
  '@stylistic/lines-around-comment': 'off',
  '@stylistic/max-len': [
    'error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],
  '@stylistic/max-statements-per-line': ['error'],
  '@stylistic/multiline-comment-style': ['off', 'starred-block'],
  '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
  '@stylistic/no-mixed-operators': [
    'error', {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],
  '@stylistic/no-trailing-spaces': [
    'error', {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],
  '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
  '@stylistic/object-curly-newline': [
    'error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    },
  ],
  '@stylistic/object-property-newline': [
    'error', {
      allowAllPropertiesOnSameLine: true,
    },
  ],
  '@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
  '@stylistic/semi-style': ['error', 'last'],
  '@stylistic/spaced-comment': [
    'error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    },
  ],
  '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
  '@stylistic/wrap-regex': 'off',
  '@stylistic/array-bracket-newline': 'error',
  '@stylistic/no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false, enforceForArrowConditionals: false }],
};
