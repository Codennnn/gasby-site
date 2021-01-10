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
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': 2,
  },
}
