module.exports = {
  parser: 'babel-eslint',
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/react',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'sort-imports': 0,
    'import/order': 0,
    'prettier/prettier': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
  },
}
