export const errors = {
  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // disallow assignment in conditional expressions
  'no-cond-assign': ['error', 'always'],

  // disallow use of console
  'no-console': 'warn',

  // Disallows expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  // TODO: semver-major, enable
  'no-constant-binary-expression': 'off',

  // disallow use of constant expressions in conditions
  'no-constant-condition': 'warn',

  // disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 'error',

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  'no-extra-parens': [
    'off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    },
  ],

  // disallow unnecessary semicolons
  'no-extra-semi': 'error',

  // disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',

  // Disallow new operators with global non-constructor functions
  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  // TODO: semver-major, enable
  'no-new-native-nonconstructor': 'off',

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  'no-unreachable-loop': [
    'error', {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  // TODO: enable once eslint 7 is dropped (which is semver-major)
  'no-unused-private-class-members': 'off',

  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'error',

  // disallow negation of the left operand of an in expression
  // deprecated in favor of no-unsafe-negation
  'no-negated-in-lhs': 'off',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  'valid-jsdoc': 'off',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
};
