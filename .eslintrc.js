module.exports = {
  root: true,
  env: {
    bowser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitasl',
  ],
  rules: {
    'semi': ['error', 'always'],
  }
}