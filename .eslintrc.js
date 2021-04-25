module.exports = {
  parser: 'babel-eslint',
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'sort-imports': 0,
    'import/order': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['^~/', '^@/'], // @ 是设置的路径别名
      },
    ],
    'jsx-a11y/accessible-emoji': 0,
  },
}
