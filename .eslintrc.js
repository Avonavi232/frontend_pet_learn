module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'i18next',
  ],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['tsx', 'jsx'] },
    ],
    'react/function-component-definition': [2, {
      namedComponents: ['function-declaration', 'arrow-function'],
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
  },
};
