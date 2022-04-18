module.exports = {
  extends: [
    './src/rules/base/best-practices',
    './src/rules/base/possible-errors',
    './src/rules/base/style',
    './src/rules/base/variables',
    './src/rules/base/es6',
    './src/rules/base/strict',
    './src/rules/imports',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
};
