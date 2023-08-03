/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },
  ignorePatterns: ['lib', 'es'],
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
