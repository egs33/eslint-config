module.exports = {
  extends: ['./browser', 'plugin:vue/recommended'],
  plugins: ['vue'],
  // parser: 'vue-eslint-parser',
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 4,
    }],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    // use airbnb rules in vue templates
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'vue/camelcase': [
      'error',
      {
        properties: 'never',
      },
    ],
    'vue/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/comma-spacing': 'error',
    'vue/comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'vue/dot-location': [
      'error',
      'property',
    ],
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/max-len': ['error', {
      code: 100,
      template: 100,
      comments: 100,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-useless-concat': 'error',
    'vue/object-curly-spacing': [
      'error',
      'always',
    ],
    'vue/prefer-template': 'error',
    'vue/space-in-parens': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/template-curly-spacing': 'error',
  },
};
