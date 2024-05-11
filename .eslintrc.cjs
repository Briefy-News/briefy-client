module.exports = {
  root: true,
  extends: ['@tata-v/eslint-config-react'],
  plugins: ['react-refresh', '@typescript-eslint/eslint-plugin'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
