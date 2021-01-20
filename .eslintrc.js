module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  global: {
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'no-case-declarations': 'off'
  }
}
