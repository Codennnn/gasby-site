module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'prettier/prettier': [true, { singleQuote: true }],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'include',
          'extend',
          'each',
          'function',
          'return',
          'use',
        ],
      },
    ],
    'value-keyword-case': ['lower', { ignoreKeywords: ['colorMode'] }],
  },
  ignoreFiles: ['public'],
}
