module.exports = {
  root: true,
  extends: ['@tata-v/eslint-config-react'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-a11y/control-has-associated-label': 'off',
    'react/require-default-props': 'off',
  },
}
