module.exports = {
  parser: 'babel-eslint',
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['import', 'jsx-a11y', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'sort-imports': 0,
    'import/order': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
  },
}
